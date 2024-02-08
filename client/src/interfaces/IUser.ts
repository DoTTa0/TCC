import IAddress from "./IAddress";

interface IUser {
    id: number;
    name: string;
    birthDate: string;
    phone: string;
    coren: string;
    email: string;
    gender: string;
    cpf: string;
    rg: string;
    nameMother: string;
    crm: string;
    address?: IAddress;
}

export default IUser;