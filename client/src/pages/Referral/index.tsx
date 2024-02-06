import { useState } from "react";
import MedicalProcedureTableComponent from "../../components/MedicalProcedureTableComponent";
import TitleComponent from "../../components/TitleComponent";
import { DivTime, ReferralButton, ReferralMain, StopButton, TimeInput, TimeLabel, TimePickerContainer } from "./styles";
import { FaPlay, FaRegClock } from "react-icons/fa";
import { FaRegCircleStop } from "react-icons/fa6";

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

const ReferralPage = () => {
    const [selectedTime, setSelectedTime] = useState<string>('');

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedTime(e.target.value);
    };
  
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleGenerateDate = () => {
      const [hours, minutes] = selectedTime.split(':').map(Number);
      const date = new Date();
      date.setHours(hours);
      date.setMinutes(minutes);
      date.setSeconds(0)
      // Aqui você pode fazer o que quiser com o objeto de data gerado
      console.log('Data gerada:', date);
    };
    
    return (
        <div className="page">
            <ReferralMain>
                <TitleComponent title='Encaminhamento' />
                <TimePickerContainer>
                    <DivTime>
                        <TimeInput
                            mask="99:99"
                            maskChar="_"
                            value={selectedTime}
                            onChange={handleTimeChange}
                            placeholder="00:00"
                            required={true}
                        />
                        <TimeLabel>Início</TimeLabel>
                        <FaRegClock color="#152C70" fontSize={25}/>
                    </DivTime>
                    <DivTime>
                        <TimeInput
                            mask="99:99"
                            maskChar="_"
                            value={selectedTime}
                            onChange={handleTimeChange}
                            placeholder="00:00"
                            required={true}
                        />
                        <TimeLabel>Fim</TimeLabel>
                        <FaRegClock color="#152C70" fontSize={25}/>
                    </DivTime>

                    <ReferralButton>Encamminhar &nbsp; <FaPlay fontSize={15}/> </ReferralButton>
                    <StopButton>Parar &nbsp; <FaRegCircleStop /></StopButton>
                </TimePickerContainer>
                <MedicalProcedureTableComponent data={data} />
            </ReferralMain>
        </div>
    );
}

export default ReferralPage;