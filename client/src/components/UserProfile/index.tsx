import { Dispatch } from "react";
import ExpandableComponent from "../ExpandableComponent";
import InputComponent from "../InputComponent";
import { DivFormInfo, FormInfo, FormInfoItem, UserProfileMain } from "./styles";
import IUser from "../../interfaces/IUser";
import IAddress from "../../interfaces/IAddress";

interface UserProfileProps {
    getUserType?: number;
    user: IUser;
    setUser: Dispatch<React.SetStateAction<IUser>>;
    address: IAddress;
    setAddress: Dispatch<React.SetStateAction<IAddress>>;
    disable?: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({user, setUser, address, setAddress, getUserType = Number(sessionStorage.getItem('userType')), disable = false}) => {

    return (
        <UserProfileMain>
            <ExpandableComponent title='Informações Gerais'>
                <FormInfo>
                    <DivFormInfo>
                        <FormInfoItem width='25%'>
                            <InputComponent title='Nome Completo' disable={disable} value={user.name} object={user} nameObject={'name'} setValue={setUser}/>
                        </FormInfoItem>
                        <FormInfoItem width='25%'>
                            <InputComponent title='Data de nascimento' disable={true} value={user.birthDate} object={user} nameObject={'birthDate'} setValue={setUser}/>
                        </FormInfoItem>
                        <FormInfoItem width='25%'>
                            <InputComponent title='Nome da mãe' disable={disable} value={user.nameMother} object={user} nameObject={'nameMother'} setValue={setUser}/>
                        </FormInfoItem>
                        <FormInfoItem width='25%'>
                            <InputComponent title='E-mail' disable={disable} value={user.email} object={user} nameObject={'email'} setValue={setUser}/>
                        </FormInfoItem>
                    </DivFormInfo>
                    <DivFormInfo>
                        <FormInfoItem width='15%'>
                            <InputComponent title='CPF' disable={disable} value={user.cpf} object={user} nameObject={'cpf'} setValue={setUser}/>
                        </FormInfoItem>
                        <FormInfoItem width='15%'>
                            <InputComponent title='RG' disable={disable} value={user.rg} object={user} nameObject={'rg'} setValue={setUser}/>
                        </FormInfoItem>
                        <FormInfoItem width='25%'>
                            <InputComponent title='Telefone' disable={disable} value={user.phone} object={user} nameObject={'phone'} setValue={setUser}/>
                        </FormInfoItem>
                        <FormInfoItem width='25%'>
                            <InputComponent title='Telefone de emergência' disable={disable} value={user.phoneEmergency} object={user} nameObject={'phoneEmergency'} setValue={setUser}/>
                        </FormInfoItem>
                        <FormInfoItem width='15%'>
                            <InputComponent title='Sexo' disable={disable} value={user.gender} object={user} nameObject={'gender'} setValue={setUser}/>
                        </FormInfoItem>
                    </DivFormInfo>
                    { getUserType !== 4 &&
                        <DivFormInfo>
                        { (getUserType  === 1  || getUserType  === 2) && 
                            <FormInfoItem width='15%'>
                                <InputComponent title='CRM' value={user.crm} object={user} nameObject={'crm'} setValue={setUser}/>
                            </FormInfoItem>
                        }
                       {(getUserType  === 1  || getUserType  === 3) && 
                            <FormInfoItem width='15%'>
                                <InputComponent title='COREN' value={user.coren} object={user} nameObject={'coren'} setValue={setUser}/>
                            </FormInfoItem>
                        }
                    </DivFormInfo>}
                </FormInfo>
            </ExpandableComponent>
            { getUserType === 4 &&
            <ExpandableComponent title='Endereço'>
                <FormInfo>
                    <DivFormInfo>
                        <FormInfoItem width='25%'>
                            <InputComponent title='Rua' disable={disable} value={address.street ?? ''} object={address} nameObject={'street'} setValue={setAddress}/>
                        </FormInfoItem>
                        <FormInfoItem width='10%'>
                            <InputComponent title='Número' disable={disable} value={address.number ?? ''} object={address} nameObject={'number'} setValue={setAddress}/>
                        </FormInfoItem>
                        <FormInfoItem width='20%'>
                            <InputComponent title='Complemento' disable={disable} value={address.complement ?? ''} object={address} nameObject={'complement'} setValue={setAddress}/>
                        </FormInfoItem>
                        <FormInfoItem width='15%'>
                            <InputComponent title='CEP' disable={disable} value={address.cep ?? ''} object={address} nameObject={'cep'} setValue={setAddress}/>
                        </FormInfoItem>
                        <FormInfoItem width='20%'>
                            <InputComponent title='Bairro' disable={disable} value={address.neighborhood ?? ''} object={address} nameObject={'neighborhood'} setValue={setAddress}/>
                        </FormInfoItem>
                    </DivFormInfo>
                    <DivFormInfo>
                        <FormInfoItem width='20%'>
                            <InputComponent title='Cidade' disable={disable} value={address.city ?? ''} object={address} nameObject={'city'} setValue={setAddress}/>
                        </FormInfoItem>
                        <FormInfoItem width='20%'>
                            <InputComponent title='Estado' disable={disable} value={address.state ?? ''} object={address} nameObject={'state'} setValue={setAddress}/>
                        </FormInfoItem>
                    </DivFormInfo>
                </FormInfo>
            </ExpandableComponent>}

        </UserProfileMain>
    )
}

export default UserProfile;