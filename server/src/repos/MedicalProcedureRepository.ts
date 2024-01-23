import { AppDataSource } from "../database";
import MedicalProcedure from "../entities/MedicalProcedure";
import Prescriptions from "../entities/Prescriptions";
import MedicalProcedureRequest from "../models/Request/MedicalProcedureRequest";

const relations = [ 
    'patient', 
    'doctor', 
    'nurse', 
    'medicalProcedureType',
    'appointments',
    'prescriptions',
    'patient.medicalHistories',
    'medicalRecord'
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

const edit = async (id:number, req: MedicalProcedureRequest): Promise<MedicalProcedure | Error> => {
    const medicalProcedure = await getById(id);
    if (!medicalProcedure) throw new Error("Procedimento não encontrado");

    medicalProcedure.medicalRecord.doctorRecord = req.medicalRecord?.doctorRecord ?? medicalProcedure.medicalRecord?.doctorRecord;
    medicalProcedure.medicalRecord.nurseRecord = req.medicalRecord?.nurseRecord ?? medicalProcedure.medicalRecord?.nurseRecord;

    if (req.prescriptions.length > 0) {
        req.prescriptions.forEach((item) => {
            const filterPrescription = medicalProcedure.prescriptions.filter((pre) => pre.medicament.toLocaleLowerCase() === item.medicament.toLocaleLowerCase())[0];
            if(filterPrescription)
                medicalProcedure.prescriptions.forEach((el, index) => {
                    if (el.medicament.toLocaleLowerCase() === item.medicament.toLocaleLowerCase()) {
                        medicalProcedure.prescriptions[index].medicament = item.medicament;
                        medicalProcedure.prescriptions[index].dosege = item.dosage;
                        medicalProcedure.prescriptions[index].intructions = item.instructions;
                    }
                });
            else 
                medicalProcedure.prescriptions.push({
                    medicament: item.medicament,
                    dosege: item.dosage,
                    intructions: item.instructions
                } as Prescriptions);
        });
    }

    await medicalProcedureRepository.save(medicalProcedure);

    return medicalProcedure;
}


export default { 
    listAll,
    listByDoctorId,
    listByNurseId,
    listByPatientId,
    getById,
    edit
};