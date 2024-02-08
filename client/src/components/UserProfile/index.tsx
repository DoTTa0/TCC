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
}

const UserProfile: React.FC<UserProfileProps> = ({user, setUser, address, setAddress, getUserType = Number(localStorage.getItem('userType'))}) => {

    return (
        <UserProfileMain>
            <ExpandableComponent title='Informações Gerais'>
                <FormInfo>
                    <DivFormInfo>
                        <FormInfoItem width='25%'>
                            <InputComponent title='Nome Completo' value={user.name} object={user} nameObject={'name'} setValue={setUser}/>
                        </FormInfoItem>
                        <FormInfoItem width='25%'>
                            <InputComponent title='Data de nascimento' value={user.birthDate} object={user} nameObject={'birthDate'} setValue={setUser}/>
                        </FormInfoItem>
                        <FormInfoItem width='25%'>
                            <InputComponent title='Nome da mãe' value={user.nameMother} object={user} nameObject={'nameMother'} setValue={setUser}/>
                        </FormInfoItem>
                        <FormInfoItem width='25%'>
                            <InputComponent title='E-mail' value={user.email} object={user} nameObject={'email'} setValue={setUser}/>
                        </FormInfoItem>
                    </DivFormInfo>
                    <DivFormInfo>
                        <FormInfoItem width='15%'>
                            <InputComponent title='CPF' value={user.cpf} object={user} nameObject={'cpf'} setValue={setUser}/>
                        </FormInfoItem>
                        <FormInfoItem width='15%'>
                            <InputComponent title='RG' value={user.rg} object={user} nameObject={'rg'} setValue={setUser}/>
                        </FormInfoItem>
                        <FormInfoItem width='25%'>
                            <InputComponent title='Telefone' value={user.phone} object={user} nameObject={'phone'} setValue={setUser}/>
                        </FormInfoItem>
                        <FormInfoItem width='25%'>
                            <InputComponent title='Telefone de emergência'value={user.phone} object={user} nameObject={'phone'} setValue={setUser}/>
                        </FormInfoItem>
                        <FormInfoItem width='15%'>
                            <InputComponent title='Sexo' value={user.gender} object={user} nameObject={'gender'} setValue={setUser}/>
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
                            <InputComponent title='Rua' value={address.street ?? ''} object={address} nameObject={'street'} setValue={setAddress}/>
                        </FormInfoItem>
                        <FormInfoItem width='10%'>
                            <InputComponent title='Número' value={address.number ?? ''} object={address} nameObject={'number'} setValue={setAddress}/>
                        </FormInfoItem>
                        <FormInfoItem width='20%'>
                            <InputComponent title='Complemento' value={address.complement ?? ''} object={address} nameObject={'complement'} setValue={setAddress}/>
                        </FormInfoItem>
                        <FormInfoItem width='15%'>
                            <InputComponent title='CEP' value={address.cep ?? ''} object={address} nameObject={'cep'} setValue={setAddress}/>
                        </FormInfoItem>
                        {/* <FormInfoItem width='20%'>
                            <InputComponent title='Bairro' value={user.address.} setValue={setName}/>
                        </FormInfoItem> */}
                    </DivFormInfo>
                    <DivFormInfo>
                        <FormInfoItem width='20%'>
                            <InputComponent title='Cidade' value={address.city ?? ''} object={address} nameObject={'city'} setValue={setAddress}/>
                        </FormInfoItem>
                        <FormInfoItem width='20%'>
                            <InputComponent title='Estado' value={address.state ?? ''} object={address} nameObject={'state'} setValue={setAddress}/>
                        </FormInfoItem>
                    </DivFormInfo>
                </FormInfo>
            </ExpandableComponent>}

        </UserProfileMain>
    )
}

export default UserProfile;