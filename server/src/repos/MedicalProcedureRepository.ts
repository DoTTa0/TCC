import { Between } from "typeorm";
import { AppDataSource } from "../database";
import MedicalProcedure from "../entities/MedicalProcedure";
import Prescriptions from "../entities/Prescriptions";
import MedicalProcedureRequest from "../models/Request/MedicalProcedureRequest";
import ReferralRequest from "../models/Request/ReferralRequest";
import MedicalRecord from "../entities/MedicalRecord";
import { BADRESP } from "dns";

const relations = [ 
    'patient', 
    'doctor', 
    'nurse', 
    'medicalProcedureType',
    'appointments',
    'prescriptions',
    'patient.medicalHistories',
    'medicalRecord',
    'medicalProcedureType.medicalProcedureSection'
];


const medicalProcedureRepository = AppDataSource.getRepository(MedicalProcedure);

const listAll = (): Promise<MedicalProcedure[]> => {
    return medicalProcedureRepository.find({
        relations
    });
}

const listByDoctorId = (doctorId: number): Promise<MedicalProcedure[]> => {
    return medicalProcedureRepository.find({
        where:{
            doctorId
        },
        relations
    });
}

const listByNurseId = (nurseId: number): Promise<MedicalProcedure[]> => {
    return medicalProcedureRepository.find({
        where:{
            nurseId
        },
        relations
    });
}

const listByPatientId = (patientId: number): Promise<MedicalProcedure[]> => {
    return medicalProcedureRepository.find({
        where:{
            patientId
        },
        relations
    });
}

const getById = (id:number): Promise<MedicalProcedure | null> => {
    return medicalProcedureRepository.findOne({
        where:{
            id
        },
        relations
    });
}

const edit = async (id:number, req: MedicalProcedureRequest): Promise<MedicalProcedure> => {
    const medicalProcedure = await getById(id);
    if (!medicalProcedure) throw new Error("Procedimento não encontrado");

    if (medicalProcedure.medicalRecord === null) medicalProcedure.medicalRecord = new MedicalRecord();

    medicalProcedure.medicalRecord.doctorRecord = req.medicalRecord?.doctorRecord ?? medicalProcedure.medicalRecord?.doctorRecord;
    medicalProcedure.medicalRecord.nurseRecord = req.medicalRecord?.nurseRecord ?? medicalProcedure.medicalRecord?.nurseRecord;
   
    //remove item
    medicalProcedure.prescriptions.forEach((pre, index) => {
        const somePrescription = req.prescriptions.some((item) => item.id === pre.id);

        if(!somePrescription) {
            medicalProcedure.prescriptions.splice(index, 1);
        }
    });
    //add novo item
    req.prescriptions.forEach((item) => {
        const newPrescription = item.id === 0;
        if(newPrescription) {
            medicalProcedure.prescriptions.push({
                medicament: item.medicament,
                dosage: item.dosage,
                instructions: item.instructions
            } as Prescriptions);
        }
    });

    await medicalProcedureRepository.save(medicalProcedure, {});

    return medicalProcedure;
}

const getByPatientToCheckin = async (patientId: number): Promise<MedicalProcedure> => {
    const today = new Date(Date.now());
    const day = today.getDate();
    const month  = today.getMonth() + 1;
    const year = today.getFullYear();

    const startDate = new Date(`${year}-${month}-${day} 00:00:00`);
    const endDate = new Date(`${year}-${month}-${day} 23:59:59`);
    
    const medicalProcedure = await medicalProcedureRepository.findOne({
        where:{
            patientId,
            procedureDate: Between(startDate, endDate),
        },
        relations
    });

    const response = medicalProcedure === null ? new MedicalProcedure() : medicalProcedure;

    return response;
}

const editCheckin = async (id:number): Promise<MedicalProcedure> => {
    const medicalProcedure = await getById(id);
    if (!medicalProcedure) throw new Error("Procedimento não encontrado");

    if (medicalProcedure.checkin) throw new Error("Check-in já realizado!");

    medicalProcedure.checkin = true;
    medicalProcedure.checkinTime = new Date(Date.now());

    await medicalProcedureRepository.save(medicalProcedure);

    return medicalProcedure;
}

const listByNurseToReferral = async (model: ReferralRequest): Promise<MedicalProcedure[]> => {
    const { nurseId, startDate, endDate } = model;
    
    const medicalProcedure = await medicalProcedureRepository.find({
        where:{
            nurseId,
            procedureDate: Between(startDate, endDate),
        },
        relations
    });

    return medicalProcedure;
}

const listByNurseToReferralCheckin = async (model: ReferralRequest): Promise<MedicalProcedure[]> => {
    const { nurseId, startDate, endDate } = model;
    
    const medicalProcedure = await medicalProcedureRepository.find({
        where:{
            nurseId,
            checkin: true,
            procedureDate: Between(startDate, endDate)
            
        },
        relations
    });

    return medicalProcedure;
}


export default { 
    listAll,
    listByDoctorId,
    listByNurseId,
    listByPatientId,
    getById,
    edit,
    getByPatientToCheckin,
    editCheckin,
    listByNurseToReferral,
    listByNurseToReferralCheckin
};