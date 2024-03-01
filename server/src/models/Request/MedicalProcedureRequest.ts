import MedicalRecordRequest from "./MedicalRecordRequest";
import PrescriptionsRequest from "./PrescriptionsRequest";

export default class MedicalProcedureRequest {
    medicalRecord?: MedicalRecordRequest;
    prescriptions: Array<PrescriptionsRequest>;

    //procedureDate: Date;

}