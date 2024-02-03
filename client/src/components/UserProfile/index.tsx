import { useState } from "react";
import ExpandableComponent from "../ExpandableComponent";
import InputComponent from "../InputComponent";
import { DivFormInfo, FormInfo, FormInfoItem, UserProfileMain } from "./styles";

const UserProfile = () => {
    const [name, setName] = useState('');
    return (
        <UserProfileMain>
            <ExpandableComponent expand={false} title='Informações Gerais'>
                <FormInfo>
                    <DivFormInfo>
                        <FormInfoItem width='25%'>
                            <InputComponent title='Nome Completo' value={name} setValue={setName}/>
                        </FormInfoItem>
                        <FormInfoItem width='25%'>
                            <InputComponent title='Data de nascimento' value={name} setValue={setName}/>
                        </FormInfoItem>
                        <FormInfoItem width='25%'>
                            <InputComponent title='Nome da mãe' value={name} setValue={setName}/>
                        </FormInfoItem>
                        <FormInfoItem width='25%'>
                            <InputComponent title='E-mail' value={name} setValue={setName}/>
                        </FormInfoItem>
                    </DivFormInfo>
                    <DivFormInfo>
                        <FormInfoItem width='15%'>
                            <InputComponent title='CPF' value={name} setValue={setName}/>
                        </FormInfoItem>
                        <FormInfoItem width='15%'>
                            <InputComponent title='RG' value={name} setValue={setName}/>
                        </FormInfoItem>
                        <FormInfoItem width='25%'>
                            <InputComponent title='Telefone' value={name} setValue={setName}/>
                        </FormInfoItem>
                        <FormInfoItem width='25%'>
                            <InputComponent title='Telefone de emergência' value={name} setValue={setName}/>
                        </FormInfoItem>
                        <FormInfoItem width='15%'>
                            <InputComponent title='Sexo' value={name} setValue={setName}/>
                        </FormInfoItem>
                    </DivFormInfo>
                    <DivFormInfo>
                        <FormInfoItem width='15%'>
                            <InputComponent title='CRM' value={name} setValue={setName}/>
                        </FormInfoItem>
                        <FormInfoItem width='15%'>
                            <InputComponent title='COREN' value={name} setValue={setName}/>
                        </FormInfoItem>
                    </DivFormInfo>
                </FormInfo>
            </ExpandableComponent>
            <ExpandableComponent expand={false} title='Endereço'>
                <FormInfo>
                    <DivFormInfo>
                        <FormInfoItem width='25%'>
                            <InputComponent title='Rua' value={name} setValue={setName}/>
                        </FormInfoItem>
                        <FormInfoItem width='10%'>
                            <InputComponent title='Número' value={name} setValue={setName}/>
                        </FormInfoItem>
                        <FormInfoItem width='20%'>
                            <InputComponent title='Complemento' value={name} setValue={setName}/>
                        </FormInfoItem>
                        <FormInfoItem width='15%'>
                            <InputComponent title='CEP' value={name} setValue={setName}/>
                        </FormInfoItem>
                        <FormInfoItem width='20%'>
                            <InputComponent title='Bairro' value={name} setValue={setName}/>
                        </FormInfoItem>
                    </DivFormInfo>
                    <DivFormInfo>
                        <FormInfoItem width='20%'>
                            <InputComponent title='Cidade' value={name} setValue={setName}/>
                        </FormInfoItem>
                        <FormInfoItem width='20%'>
                            <InputComponent title='Estado' value={name} setValue={setName}/>
                        </FormInfoItem>
                    </DivFormInfo>
                </FormInfo>
            </ExpandableComponent>

        </UserProfileMain>
    )
}

export default UserProfile;