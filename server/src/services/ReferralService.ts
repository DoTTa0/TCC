import MedicalProcedure from "../entities/MedicalProcedure";
import ReferralRequest from "../models/Request/ReferralRequest";
import ReferralCheckinResponse from "../models/Response/ReferralCheckinResponse";
import MedicalProcedureRepository from "../repos/MedicalProcedureRepository";

const referralSearch = async (req: ReferralRequest): Promise<MedicalProcedure[]> => {
    const medicalProcedures = await MedicalProcedureRepository.listByNurseToReferral(req);
    
    return medicalProcedures;
}

const referralSearchToJob = async (req: ReferralRequest): Promise<ReferralCheckinResponse[]>  => {
    const medicalProcedures = await MedicalProcedureRepository.listByNurseToReferralCheckin(req);

    const response = medicalProcedures.map((item) => {
        const { checkin, patient, medicalProcedureType } = item;
        const res = new ReferralCheckinResponse();
        res.checkin = checkin;
        res.patient = patient;
        res.medicalProcedureSection = medicalProcedureType.medicalProcedureSection;

        return res;
    });

    return response;
}

export default {
    referralSearch,
    referralSearchToJob
}