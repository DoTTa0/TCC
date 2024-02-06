import { IoIosArrowForward, IoIosCheckmark} from "react-icons/io";
import { BoxTableInit, ButtonCPF, CheckinMain, CircleIcon, DivButton, DivFormCPF, FormCPF, InputCPF, LabelCPF, LabelWarning, SubTitle } from "./styles";
import { RxCross2 } from "react-icons/rx";
import { PiWarningCircleFill } from "react-icons/pi";
import { useState } from "react";
import TitleComponent from "../../components/TitleComponent";
import UserProfile from "../../components/UserProfile";
import MedicalProcedureCheckin from "../../components/MedicalProcedureCheckin";
import ButtonComponent from "../../components/ButtonComponent";

const CheckinPage = () => {
    const [cpf, setCpf] = useState('');
    const isError = true;
    const isInit = true;
    return (
        <div className="page">
            <CheckinMain>
                <TitleComponent title='Check-In' />
                <FormCPF>
                    <DivFormCPF>
                        <InputCPF type='text' required value={cpf} onChange={(event) => setCpf(event.target.value)}/>
                        <LabelCPF>CPF</LabelCPF>
                    </DivFormCPF>
                    
                    <ButtonCPF><IoIosArrowForward /></ButtonCPF>
                </FormCPF>
                { isError &&
                    <BoxTableInit init={true}>Por favor, insira seu CPF acima.</BoxTableInit>
                }
                { isError &&
                    <BoxTableInit>
                        <LabelWarning color='red'>Aviso!</LabelWarning>
                        <CircleIcon color='red'><RxCross2 /></CircleIcon>
                        Nenhum procedimento registrado para hoje. Por favor, contate um responsável.
                    </BoxTableInit>
                }
                { isError &&
                    <BoxTableInit>
                        <LabelWarning color='#152C70'>Aviso!</LabelWarning>
                        <CircleIcon color='#152C70'><PiWarningCircleFill /></CircleIcon>
                        Você já realizou o check-in.
                    </BoxTableInit>
                }
                { isError &&
                    <BoxTableInit>
                        <LabelWarning color='#2ED47A'>Aviso!</LabelWarning>
                        <CircleIcon color='#2ED47A'><IoIosCheckmark /></CircleIcon>
                        Check-in realizado com sucesso!
                    </BoxTableInit>
                }
                { isInit &&
                <>
                    <SubTitle>Verifique seus dados</SubTitle>
                    <UserProfile />
                    <MedicalProcedureCheckin />
                    <DivButton>
                        <ButtonComponent text='Check-in'/>
                    </DivButton>
                </>
                }

            </CheckinMain>
        </div>
    );
}


export default CheckinPage;