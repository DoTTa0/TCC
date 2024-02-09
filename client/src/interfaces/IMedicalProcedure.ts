import IAppointments from "./IAppointments";
import IMedicialHistory from "./IMedicalHistory";
import IPrescriptions from "./IPrescriptions";

interface IMedicalProcedure {
    id: number;
    checkin: boolean;
    checkinTime: string;
    procedureDate: string;
    folder: string;
    doctorName: string;
    nurseName: string;
    medicalProcedureName: string;
    medicalProcedureSection: string;
    medicalRecordDoctor: string;
    medcialRecordNurse: string;
    appointments?: IAppointments[];
    prescriptions?: IPrescriptions[];
    medcialHistory: IMedicialHistory;
    patientName: string;
    procedureHour: string;
}

export default IMedicalProcedure;