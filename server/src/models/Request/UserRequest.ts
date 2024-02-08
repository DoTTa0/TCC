import AddressRequest from "./AddressRequest";

export default class UserRequest {
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
        address: AddressRequest;
}