import IAddressRequest from "./IAddressRequest";

export default interface IUserRequest {
    name?: string;   
    email?: string;   
    birthDate?: string;   
    gender?: string;    
    phone?: string;  
    cpf?: string;  
    rg?: string;   
    nameMother?: string;   
    crm?: string;
    coren?: string;
    address: IAddressRequest;
}