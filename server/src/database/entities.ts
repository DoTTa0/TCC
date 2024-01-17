import Address from "../models/Address";
import Appointments from "../models/Appointments";
import MedicalHistory from "../models/MedicalHistory";
import MedicalProcedure from "../models/MedicalProcedure";
import MedicalProcedureSection from "../models/MedicalProcedureSection";
import MedicalProcedureType from "../models/MedicalProcedureType";
import MedicalRecord from "../models/MedicalRecord";
import Prescriptions from "../models/Prescriptions";
import User from "../models/User";
import UserType from "../models/UserType";

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