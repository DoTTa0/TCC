import MedicalProcedure from "../../entities/MedicalProcedure";
import User from "../../entities/User";

export default class CheckinResponse {
    patient: User;
    medicalProcedure?: MedicalProcedure | null;
}