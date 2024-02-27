import { useState } from "react";
import ModalComponent from "../../components/ModalComponent";
import { ButtonCPF, CardCheckin, CardsRowCheckin, CardsRowUser, CardsSection, CardsUsers, DivFormCPF, FormCPF, HomeMain, InputCPF, LabelCPF, TittleLabel } from "./styles";
import * as FaIcons from 'react-icons/fa'
import { IoIosArrowForward } from "react-icons/io";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
    const navigate = useNavigate();
    const [cpf, setCpf] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userTypeId, setUserTypeId] = useState('');
    const [path, setPath] = useState('');

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const callUserByCpfAndUserTypeId = async () => {
        const response = await api.post(`users/validateUser`, { cpf, userTypeId })
            .then(success => success)
            .catch(error => error.response)
            .then(response => response);

            const { status, data } = response;
            console.log(response);

            if(!data) alert('Usuário não tem acesso!')

            if(status === 200) {
                sessionStorage.setItem('id', String(data.id))
                navigate(path);
            }

    }

    const handleValidateUser = (userType: string, pathName:string) => {
        sessionStorage.setItem('userType', userType);
        setPath(pathName);
        setUserTypeId(userType);
        handleOpenModal();
    }
    return (
    <>
        {isModalOpen && 
        <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal}>
            <h2>Insira seu CPF</h2>
            <FormCPF>
            <DivFormCPF>
                <InputCPF type='text' required value={cpf} onChange={(event) => setCpf(event.target.value)}/>
                <LabelCPF>CPF</LabelCPF>
            </DivFormCPF>
            
            <ButtonCPF type="button" onClick={callUserByCpfAndUserTypeId}><IoIosArrowForward /></ButtonCPF>
        </FormCPF>
        </ModalComponent>}
        <div className="page">
            <HomeMain>
            
                <TittleLabel>Ecossistema</TittleLabel>
                <CardsSection>
                    <CardsRowUser>
                        <CardsUsers onClick={() => handleValidateUser('1', '/users')}><FaIcons.FaHospitalUser /></CardsUsers>
                        <CardsUsers onClick={() => handleValidateUser('2', '/medicalProcedures')}><FaIcons.FaUserMd /></CardsUsers>
                        <CardsUsers onClick={() => handleValidateUser('3', '/medicalProcedures')}><FaIcons.FaUserNurse /></CardsUsers>
                        <CardsUsers onClick={() => handleValidateUser('4', '/medicalProcedures')}><FaIcons.FaUserInjured /></CardsUsers>
                    </CardsRowUser>
                    <CardsRowCheckin>
                        <CardCheckin to='/checkin'><FaIcons.FaUserCheck /></CardCheckin>
                    </CardsRowCheckin>
                </CardsSection>

            </HomeMain>
        </div>
    </>
    
    )
}

export default HomePage;