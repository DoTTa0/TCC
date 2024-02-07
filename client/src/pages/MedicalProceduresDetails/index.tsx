import { useState } from "react";
import ExpandableComponent from "../../components/ExpandableComponent";
import InputComponent from "../../components/InputComponent";
import TitleComponent from "../../components/TitleComponent";
import { Button, ButtonIcon, Checkin, CheckinLabel, DivButton, DivExamesInfo, DivFormInfo, ExamesInfo, FormInfo, FormInfoItem, MedicalProceduresDetailsMain } from "./styles";
import { FaCircle } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import TextAreaComponent from "../../components/TextAreaComponent";

const MedicalProceduresDetails = () => {
    const [name, setName] = useState('');
    const bool = true;
    return (
        <div className="page">
            <MedicalProceduresDetailsMain>
                <TitleComponent title='Detalhes do procedimento' />
                <ExpandableComponent title='Informações Gerais'>
                    <FormInfo>
                        <DivFormInfo>
                            <FormInfoItem width='30%'>
                                <InputComponent title='Paciente' value={name} setValue={setName}/>
                            </FormInfoItem>
                            <FormInfoItem width='30%'>
                                <InputComponent title='Médico Responsável' value={name} setValue={setName}/>
                            </FormInfoItem>
                            <FormInfoItem width='30%'>
                                <InputComponent title='Enfermeiro responsável' value={name} setValue={setName}/>
                            </FormInfoItem>
                        </DivFormInfo>
                        <DivFormInfo>
                            <FormInfoItem width='30%'>
                                <InputComponent title='Nome do procedimento' value={name} setValue={setName}/>
                            </FormInfoItem>
                            <FormInfoItem width='5%'>
                                <FaCircle fontSize={25} color="#2ED47A"/>
                            </FormInfoItem>
                            <FormInfoItem width='10%'>
                                <InputComponent title='Data' value={name} setValue={setName}/>
                            </FormInfoItem>
                            <FormInfoItem width='10%'>
                                <InputComponent title='Horário' value={name} setValue={setName}/>
                            </FormInfoItem>
                            <FormInfoItem width='10%'>
                                <InputComponent title='Hr. check-in' value={name} setValue={setName}/>
                            </FormInfoItem>
                            <FormInfoItem width='20%'>
                                <CheckinLabel>Check-in</CheckinLabel>
                                <Checkin checkin={bool}>{ bool ? 'Presente' : 'Ausente'}</Checkin>
                            </FormInfoItem>
                        </DivFormInfo>
                    </FormInfo>
                </ExpandableComponent>
                <ExpandableComponent title='Exames'>
                    <ExamesInfo>
                        { [1,2,3,4].map((item, index) => {
                            return (
                                <DivExamesInfo key={index}>
                                    teste {item}
                                </DivExamesInfo>
                            )
                            })
                        }
                    </ExamesInfo>
                    <DivButton>
                        <ButtonIcon>
                            <IoIosAddCircle fontSize={60}/>
                        </ButtonIcon>
                    </DivButton>
                </ExpandableComponent>
                <ExpandableComponent title='Consultas'>
                    <FormInfo>
                        <DivFormInfo>
                            <FormInfoItem width='50%'>
                                <InputComponent title='Motivo da consulta' value={name} setValue={setName}/>
                            </FormInfoItem>
                            <FormInfoItem width='30%'>
                                <InputComponent title='Médico Responsável' value={name} setValue={setName}/>
                            </FormInfoItem>
                            <FormInfoItem width='10%'>
                                <InputComponent title='Data da consulta' value={name} setValue={setName}/>
                            </FormInfoItem>
                        </DivFormInfo>
                        <DivFormInfo>
                            <FormInfoItem width='100%'>
                                <TextAreaComponent title='Observações' value={name} setValue={setName}/>
                            </FormInfoItem>
                        </DivFormInfo>
                    </FormInfo>
                </ExpandableComponent>
                <ExpandableComponent title='Histórico médico'>
                    <FormInfo>
                        <DivFormInfo>
                            <FormInfoItem width='100%'>
                                <TextAreaComponent title='Alergias' col={2} value={name} setValue={setName}/>
                            </FormInfoItem>
                        </DivFormInfo>
                        <DivFormInfo>
                            <FormInfoItem width='100%'>
                                <TextAreaComponent title='Histórico de doenças' col={2} value={name} setValue={setName}/>
                            </FormInfoItem>
                        </DivFormInfo>
                        <DivFormInfo>
                            <FormInfoItem width='100%'>
                                <TextAreaComponent title='Cirurgias anteriores' col={2} value={name} setValue={setName}/>
                            </FormInfoItem>
                        </DivFormInfo>
                    </FormInfo>
                </ExpandableComponent>
                <ExpandableComponent title='Prontuário - Enfermeiro'>
                    <FormInfo>
                        <DivFormInfo>
                            <FormInfoItem width='100%'>
                                <TextAreaComponent title='' col={10} value={name} setValue={setName}/>
                            </FormInfoItem>
                        </DivFormInfo>
                    </FormInfo>
                </ExpandableComponent>
                <ExpandableComponent title='Prontuário - Médico'>
                    <FormInfo>
                        <DivFormInfo>
                            <FormInfoItem width='100%'>
                                <TextAreaComponent title='' col={10} value={name} setValue={setName}/>
                            </FormInfoItem>
                        </DivFormInfo>
                    </FormInfo>
                </ExpandableComponent>
                <ExpandableComponent title='Prescrisção Médica'>
                    <FormInfo>
                        <DivFormInfo>
                            <FormInfoItem width='100%'>
                                <TextAreaComponent title='' col={10} value={name} setValue={setName}/>
                            </FormInfoItem>
                        </DivFormInfo>
                    </FormInfo>
                </ExpandableComponent>
                <DivButton>
                    <Button>
                        Salvar
                    </Button>
                </DivButton>
            </MedicalProceduresDetailsMain>
        </div>
    )
}

export default MedicalProceduresDetails;