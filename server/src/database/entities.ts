import Address from "../entities/Address";
import Appointments from "../entities/Appointments";
import MedicalHistory from "../entities/MedicalHistory";
import MedicalProcedure from "../entities/MedicalProcedure";
import MedicalProcedureSection from "../entities/MedicalProcedureSection";
import MedicalProcedureType from "../entities/MedicalProcedureType";
import MedicalRecord from "../entities/MedicalRecord";
import Prescriptions from "../entities/Prescriptions";
import User from "../entities/User";
import UserType from "../entities/UserType";

const entities = [
    User, 
    UserType,
    Address,
    Appointments,
    MedicalProcedure,
    MedicalHistory,
    MedicalProcedureSection,
    MedicalProcedureType,
    MedicalRecord,
    Prescriptions
];

export default entities;