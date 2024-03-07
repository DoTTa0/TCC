import { IoIosArrowForward, IoIosCheckmark} from "react-icons/io";
import { BoxTableInit, ButtonCPF, CheckinMain, CircleIcon, DivButton, DivFormCPF, FormCPF, InputCPF, LabelCPF, LabelWarning, SubTitle } from "./styles";
import { RxCross2 } from "react-icons/rx";
import { PiWarningCircleFill } from "react-icons/pi";
import { useState } from "react";
import TitleComponent from "../../components/TitleComponent";
import UserProfile from "../../components/UserProfile";
import MedicalProcedureCheckin from "../../components/MedicalProcedureCheckin";
import ButtonComponent from "../../components/ButtonComponent";
import api from "../../services/api";
import IUser from "../../interfaces/IUser";
import IAddress from "../../interfaces/IAddress";
import IMedicalProcedure from "../../interfaces/IMedicalProcedure";
import { format } from "date-fns";

const CheckinPage = () => {
    const [cpf, setCpf] = useState('');
    const [showInit, setShowInit] = useState(true);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [showSuccessError, setShowSuccessError] = useState(false);
    const [showCheckin, setShowCheckin] = useState(false);
    const [user, setUser] = useState<IUser>({} as IUser );
    const [address, setAddress] = useState<IAddress>({} as IAddress );
    const [medicalProcedure, setMedicalProcedure] = useState<IMedicalProcedure>({} as IMedicalProcedure );


    const callUserByCpf = async () => {
        const response = await api.post(`checkin/search`, { cpf })
            .then(success => success)
            .catch(error => error.response)
            .then(response => response);

            const { status, data } = response;

            if (status !== 200) {
                setShowError(true);
                setShowInit(false);
                setShowCheckin(false);
                setShowSuccess(false);
                setShowSuccessError(false);
            }

            setUser(data.patient as IUser);
            if(data.patient.address)
                setAddress(data.patient.address as IAddress);

            const responseData = {
                doctorName: data.medicalProcedure.doctor.name,
                id: data.medicalProcedure.id,
                medicalProcedureName: data.medicalProcedure.medicalProcedureType.name,
                medicalProcedureSection: data.medicalProcedure.medicalProcedureType.medicalProcedureSection.color,
                nurseName: data.medicalProcedure.nurse.name,
                procedureDate: format(data.medicalProcedure.procedureDate, 'dd/MM/yyyy'),
                procedureHour: format(data.medicalProcedure.procedureDate, 'HH:mm')

            }  as IMedicalProcedure;
        
            setMedicalProcedure(responseData);

            setShowError(false);
            setShowInit(false);
            setShowCheckin(true);
            setShowSuccess(false);
            setShowSuccessError(false);
    }

    const updateCheckin = async () => {
        const response = await api.put(`checkin/checkin`, createRequest(),{
            responseType: 'blob', // Indica ao axios que a resposta é um blob (arquivo)
          })
            .then(success => success)
            .catch(error => error.response)
            .then(response => response);

            if (response.status === 200 || response.status === 204 ) {

                // Cria um URL temporário para o blob recebido
                const url = window.URL.createObjectURL(new Blob([response.data]));
                
                // Cria um link temporário e simula o clique para iniciar o download
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'patient.pdf');
                document.body.appendChild(link);
                link.click();
                link.parentNode?.removeChild(link);

                setShowError(false);
                setShowInit(false);
                setShowCheckin(false);
                setShowSuccess(true);
                setShowSuccessError(false);
            }

            if (response.status === 500) {
                setShowError(false);
                setShowInit(false);
                setShowCheckin(false);
                setShowSuccess(false);
                setShowSuccessError(true);
            }
    }

    const createRequest = (): object => {
        return {
            cpf,
            medicalProcedureId: medicalProcedure.id
            
        }
    }

    const handleButton = async () => {
        await updateCheckin();
    }

    return (
        <div className="page">
            <CheckinMain>
                <TitleComponent title='Check-In' />
                <FormCPF>
                    <DivFormCPF>
                        <InputCPF type='text' required value={cpf} onChange={(event) => setCpf(event.target.value)}/>
                        <LabelCPF>CPF</LabelCPF>
                    </DivFormCPF>
                    
                    <ButtonCPF type="button" onClick={callUserByCpf}><IoIosArrowForward /></ButtonCPF>
                </FormCPF>
                { showInit &&
                    <BoxTableInit init={true}>Por favor, insira seu CPF acima.</BoxTableInit>
                }
                { showError &&
                    <BoxTableInit>
                        <LabelWarning color='red'>Aviso!</LabelWarning>
                        <CircleIcon color='red'><RxCross2 /></CircleIcon>
                        Nenhum procedimento registrado para hoje. Por favor, contate um responsável.
                    </BoxTableInit>
                }
                { showSuccessError &&
                    <BoxTableInit>
                        <LabelWarning color='#152C70'>Aviso!</LabelWarning>
                        <CircleIcon color='#152C70'><PiWarningCircleFill /></CircleIcon>
                        Você já realizou o check-in.
                    </BoxTableInit>
                }
                { showSuccess &&
                    <BoxTableInit>
                        <LabelWarning color='#2ED47A'>Aviso!</LabelWarning>
                        <CircleIcon color='#2ED47A'><IoIosCheckmark /></CircleIcon>
                        Check-in realizado com sucesso!
                    </BoxTableInit>
                }
                { showCheckin &&
                <>
                    <SubTitle>Verifique seus dados</SubTitle>
                    <UserProfile disable={true} getUserType={4} user={user} setUser={setUser} address={address} setAddress={setAddress}/>
                    <MedicalProcedureCheckin medicalProcedure={medicalProcedure }/>
                    <DivButton>
                        <ButtonComponent onClick={handleButton} text='Check-in'/>
                    </DivButton>
                </>
                }

            </CheckinMain>
        </div>
    );
}


export default CheckinPage;