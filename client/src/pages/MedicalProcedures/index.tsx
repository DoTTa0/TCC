import { IoSearch } from "react-icons/io5";
import ButtonComponent from "../../components/ButtonComponent";
import MedicalProcedureTableComponent from "../../components/MedicalProcedureTableComponent";
import TitleComponent from "../../components/TitleComponent";
import { DivButton, MedicalProcedureMain } from "./styles";

const data = [
    {
        sectionColor: 'Consulta',
        patientName: 'João',
        medicalProcedureName: 'Check-up',
        procedureDate: '2024-01-01',
        doctorName: 'Dr. Silva',
        checkin: true,
        checkinTime: '09:00',
        medicalProcedureId: 'Editar'
    },
    {
      'sectionColor': 'Exame',
      'patientName': 'Maria',
      'medicalProcedureName': 'Ressonância',
      'procedureDate': '2024-02-15',
      'doctorName': 'Dra. Santos',
      'checkin': false,
      'checkinTime': '',
      'medicalProcedureId': 'Excluir'
    },
    // Adicione mais objetos conforme necessário
  ];

const MedicalProcedeuresPage = () => {
    return (
        <div className="page">
            <MedicalProcedureMain>
                <TitleComponent title='Procedimentos' />
                <DivButton>
                    <ButtonComponent icon={<IoSearch />} text='Pesquisar'/>
                </DivButton>
                <MedicalProcedureTableComponent data={data} />
            </MedicalProcedureMain>
        </div>
    );
}

export default MedicalProcedeuresPage;