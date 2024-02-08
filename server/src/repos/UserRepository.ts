import { AppDataSource } from "../database";
import User from "../entities/User";
import UserRequest from "../models/Request/UserRequest";

const relations = [ 'userType', 'address' ];

const userRepository = AppDataSource.getRepository(User);

const list = (): Promise<User[]> => {
    return userRepository.find({
        relations
    });
}

const getById = (id: number): Promise<User | null> => {
    return userRepository.findOne({
        where: {
            id
        },
        relations
    });
}

const edit = async (id: number,req: UserRequest):  Promise<User | Error> => {

    const user = await getById(id)

    if (!user) throw new Error("Usuário não encontrado");

    user.birthDate = req.birthDate ?? user.birthDate;
    user.name = req.name ?? user.name;
    user.nameMother = req.nameMother ?? user.nameMother;
    user.cpf = req.cpf ?? user.cpf;
    user.crm = req.crm ?? user.crm;
    user.email = req.email ?? user.email;
    user.gender = req.gender ?? user.gender;
    user.phone = req.phone ?? user.phone;
    user.rg = req.rg ?? user.rg;

    if(user.address) {
        user.address.cep = req.address?.cep ?? user.address?.cep;
        user.address.city = req.address?.city ?? user.address?.city;
        user.address.complement = req.address?.complement ?? user.address?.complement;
        user.address.number = req.address?.number ?? user.address?.number;
        user.address.state = req.address?.state ?? user.address?.state;
        user.address.street = req.address?.street ?? user.address?.street;
    
    }

    await userRepository.save(user);

    return user;

}

const getByCpf = (cpf: string): Promise<User | null> => {
    return userRepository.findOne({
        where: {
            cpf
        },
        relations
    });
}

export default { 
    list,
    getById,
    edit,
    getByCpf
};