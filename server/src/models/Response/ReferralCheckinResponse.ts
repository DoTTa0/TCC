import MedicalProcedureSection from "../../entities/MedicalProcedureSection";
import User from "../../entities/User";

export default class ReferralCheckinResponse {
    checkin: boolean;
    patient: User;
    medicalProcedureSection: MedicalProcedureSection;
}