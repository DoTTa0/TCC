import { Dispatch, useState } from "react";
import MedicalProcedureTableComponent from "../../components/MedicalProcedureTableComponent";
import TitleComponent from "../../components/TitleComponent";
import { DivReferralJob, DivReferralJobItem, DivTime, ReferralButton, ReferralMain, SpanJob, StopButton, TimeInput, TimeLabel, TimePickerContainer } from "./styles";
import { FaCircle, FaPlay, FaRegClock } from "react-icons/fa";
import { FaRegCircleStop } from "react-icons/fa6";
import api from "../../services/api";
import { format } from "date-fns";
import { ListMedicalProcedures } from "../MedicalProcedures";
import ButtonComponent from "../../components/ButtonComponent";
import { IoSearch } from "react-icons/io5";
import IReferralRequest from "../../interfaces/Request/IReferralRequest";
import { IReferralJob } from "../../interfaces/IReferralJob";
import Loading from "../../components/LoadingComponent";


const ReferralPage = () => {
    const getJobsessionStorage = (): boolean => {
        const flagJob = sessionStorage.getItem('job');
    
        if (flagJob === undefined || flagJob === null || flagJob === 'false') return false;
        
        return true;
    }

    const [selectedTimeStart, setSelectedTimeStart] = useState<string>('');
    const [selectedTimeEnd, setSelectedTimeEnd] = useState<string>('');
    const [listAll, setListAll] = useState<ListMedicalProcedures[]>([]);
    const [nurseId] = useState(Number(sessionStorage.getItem('id')));
    const [startDate, setStartDate] = useState<Date>();
    const [endDate, setEndDate] = useState<Date>();
    const [job, setJob] = useState(getJobsessionStorage());
    const [listReferral, setListReferral] = useState<IReferralJob[]>([]);
    const [loading, setLoading] = useState(false);

    // const [intervalId, setIntervalId] = useState(0);
    // const [timeoutId, setTimeoutId] = useState(0);


    const callListAll = async () => {
        if (!(startDate instanceof Date) && !(endDate instanceof Date)) return alert('Selecione um horário válido.');
        if (startDate && endDate && startDate > endDate ) return alert('Selecione um horário de início maior que o de final.');

        const allMedicalProcedures = await api.post('referral/search', createRequest())
            .then(success => success)
            .catch(error => error.response)
            .then(response => response);
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response: ListMedicalProcedures[] = allMedicalProcedures.data.map((item: any) => {
            const res = {
                sectionColor: item.medicalProcedureType.medicalProcedureSection.color,
                patientName: item.patient.name,
                medicalProcedureName: item.medicalProcedureType.name,
                procedureDate: format(item.procedureDate.replace('Z', ''), 'dd/MM/yyyy'),
                doctorName: item.doctor.name,
                checkin: item.checkin,
                checkinTime: item.checkinTime !== null ? format(new Date(item.checkinTime.replace('Z', '')), 'HH:mm') : null,
                medicalProcedureId: item.id
            } as ListMedicalProcedures;
            return res;
        })

        setListAll(response)
    }
  
    const handleGenerateDate = (value: string, setValue: Dispatch<React.SetStateAction<string>>, setDate: Dispatch<React.SetStateAction<Date | undefined>>): Date => {
      const [hours, minutes] = value.split(':').map(Number);
      const date = new Date();
      date.setHours(hours - 3);
      date.setMinutes(minutes);
      date.setSeconds(0);

      setValue(value);
      setDate(date);


      return date;
    };

    const createRequest = (): IReferralRequest => {
        return {
            nurseId,
            startDate,
            endDate
            
        } as IReferralRequest;
    }

    const handleButton = async () => {
        await callListAll();
    }

    const handleJob = (status: boolean) => {
        setJob(status);

        if(status) return startJob();

        else return stopJob();
    }

    const startJob = () => {
        const getEnd = endDate ? endDate.getTime() : 0;
        const getStart = startDate ? startDate.getTime() : 0;

        const timeout = getEnd - getStart;

        const interval = setInterval(async () => {
            await callListJob();
            await callListAll();
        }, 1 * 60 * 1000); // 5 minutos
        const timeoutInterval = setTimeout(() => {
            clearInterval(interval);
            console.log('Job encerrado.');
        }, timeout); 

        // setIntervalId(interval);
        // setTimeoutId(timeoutInterval);

        sessionStorage.setItem('intervalId', String(interval));
        sessionStorage.setItem('timeoutId', String(timeoutInterval));
        sessionStorage.setItem('job', 'true');
        sessionStorage.setItem('selectedTimeStart', selectedTimeStart);
        sessionStorage.setItem('selectedTimeEnd', selectedTimeEnd);
        sessionStorage.setItem('startDate', String(startDate));
        sessionStorage.setItem('endDate', String(endDate));
    }

    const stopJob = () => {
        clearInterval(Number(sessionStorage.getItem('intervalId')));
        clearTimeout(Number(sessionStorage.getItem('timeoutId')));

        sessionStorage.removeItem('intervalId');
        sessionStorage.removeItem('timeoutId');
        sessionStorage.removeItem('job');
        sessionStorage.removeItem('selectedTimeStart');
        sessionStorage.removeItem('selectedTimeEnd');
        sessionStorage.removeItem('startDate');
        sessionStorage.removeItem('endDate');

        setSelectedTimeStart('');
        setSelectedTimeEnd('');
        setStartDate(undefined);
        setEndDate(undefined);
        setListAll([]);

    }


    const callListJob = async () => {
        const response = await api.post('referral/referralByCheckin', createRequest())
            .then(success => success)
            .catch(error => error.response)
            .then(response => response);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = response.data.map((item: any) => {
            return {
                name: item.patient.name,
                color: item.medicalProcedureSection.color,
                typeProcedure:item.medicalProcedureSection.description
            } as IReferralJob;
        })
        setListReferral(data);
        console.log(response);
    }

    const handleSearch = async () => {
        if (!(startDate instanceof Date) && !(endDate instanceof Date)) return alert('Selecione um horário válido.');
        if (startDate && endDate && startDate > endDate ) return alert('Selecione um horário de início maior que o de final.');
        setLoading(true);
        await handleButton();
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }
    
    return (
        <>
        {loading && 
            <Loading text="Aguarde, por favor..." />
        }
                <div className="page">
            <ReferralMain>
                <TitleComponent title='Encaminhamento' />
                <TimePickerContainer>
                    <DivTime>
                        <TimeInput
                            mask="99:99"
                            maskChar="_"
                            value={selectedTimeStart}
                            onChange={(e) => handleGenerateDate(e.target.value, setSelectedTimeStart, setStartDate)}
                            placeholder="00:00"
                            required={true}
                            disabled={job}
                        />
                        <TimeLabel>Início</TimeLabel>
                        <FaRegClock color="#152C70" fontSize={25}/>
                    </DivTime>
                    <DivTime>
                        <TimeInput
                            mask="99:99"
                            maskChar="_"
                            value={selectedTimeEnd}
                            onChange={(e) => handleGenerateDate(e.target.value, setSelectedTimeEnd, setEndDate)}
                            placeholder="00:00"
                            required={true}
                            disabled={job}
                        />
                        <TimeLabel>Fim</TimeLabel>
                        <FaRegClock color="#152C70" fontSize={25}/>
                    </DivTime>
                    
                    <ButtonComponent disable={job} icon={<IoSearch />} text='Pesquisar' onClick={handleSearch}/>
                    

                    {listAll.length > 0 &&
                        <>
                            {!job && <ReferralButton onClick={() => handleJob(true)}>Encamminhar &nbsp; <FaPlay fontSize={15}/> </ReferralButton>}
                            {job && <StopButton onClick={() => handleJob(false)}>Parar &nbsp; <FaRegCircleStop /></StopButton>}
                        </>
                        
                    }
                </TimePickerContainer>
                <MedicalProcedureTableComponent data={listAll} />

                { job && listReferral.length > 0 &&
                    <DivReferralJob>
                        {listReferral.map((item, index) => {
                            return (
                                <DivReferralJobItem key={index}>
                                    <SpanJob>{item.name}</SpanJob>
                                    <SpanJob>Procedimento: {item.typeProcedure} -{'>'} <FaCircle color={item.color}/></SpanJob>
                                </DivReferralJobItem>
                            )
                        })
                            
                        }
                    </DivReferralJob>
                }
            </ReferralMain>
        </div>
        </>

    );
}

export default ReferralPage;