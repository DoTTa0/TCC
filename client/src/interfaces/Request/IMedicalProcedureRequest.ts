import IMedicalRecordRequest from "./IMedicalRecordRequest";
import IPrescriptionsRequest from "./IPrescriptionsRequest";

export default interface IMedicalProcedureRequest {
    medicalRecord?: IMedicalRecordRequest;
    prescriptions: Array<IPrescriptionsRequest>;
}