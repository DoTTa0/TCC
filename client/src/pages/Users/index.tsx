import { IoSearch } from "react-icons/io5";
import { DivButton, UsersMain } from "./styles";
import ButtonComponent from "../../components/ButtonComponent";
import TitleComponent from "../../components/TitleComponent";
import UsersTableComponent from "../../components/UsersTableComponent";

const data = [
    {
        space: '',
        name: 'João',
        userType: 'Paciente',
        document: '000.000.000-00',
        phone: '(99)99999-9999',
        userId: 1
    },
    {
        space: '',
        name: 'Catarina',
        userType: 'Médico',
        document: '000.000.000-00',
        phone: '(99)99999-9999',
        userId: 2
    },
    {
        space: '',
        name: 'Correia',
        userType: 'Enfermeiro',
        document: '000.000.000-00',
        phone: '(99)99999-9999',
        userId: 3
    },
    // Adicione mais objetos conforme necessário
  ];

const UsersPage = () => {
    return (
        <div className="page">
            <UsersMain>
                <TitleComponent title='Usuárioss' />
                <DivButton>
                    <ButtonComponent icon={<IoSearch />} text='Pesquisar'/>
                </DivButton>
                <UsersTableComponent data={data} />
            </UsersMain>
        </div>
    );
}

export default UsersPage;