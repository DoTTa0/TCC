import { response } from "express";
import { validaCPF } from "../helpers/ValidaCPF";
import CheckinRequest from "../models/Request/CheckinRequest"
import CheckinResponse from "../models/Response/CheckinResponse";
import MedicalProcedureRepository from "../repos/MedicalProcedureRepository";
import UserRepository from "../repos/UserRepository";

const checkinSearch  = async (req: CheckinRequest): Promise<CheckinResponse> => {
    const { cpf } = req;
    const validateCPF = await validaCPF(cpf);

    if(!validateCPF[0]) throw new Error('CPF inválido');

    const user = await UserRepository.getByCpf(cpf);

    if (!user) throw new Error("Usuário não encontrado");

    const medicalProcedure = await MedicalProcedureRepository.getByPatientToCheckin(user.id);

    const response = new CheckinResponse();
    response.patient = user;
    response.medicalProcedure = medicalProcedure;

    return response; 
    
}

const checkin = async (req: CheckinRequest): Promise<CheckinResponse> => {
    const { medicalProcedureId } = req;

    const medicalProcedure = await MedicalProcedureRepository.editCheckin(medicalProcedureId);

    const response = new CheckinResponse();
    response.medicalProcedure = medicalProcedure;
    response.patient = medicalProcedure.patient;

    return response;
}

export default {
    checkinSearch,
    checkin
}