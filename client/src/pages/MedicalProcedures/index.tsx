import { IoSearch } from "react-icons/io5";
import ButtonComponent from "../../components/ButtonComponent";
import MedicalProcedureTableComponent from "../../components/MedicalProcedureTableComponent";
import TitleComponent from "../../components/TitleComponent";
import { DivButton, MedicalProcedureMain } from "./styles";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import Loading from "../../components/LoadingComponent";

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface ListMedicalProcedures {
    sectionColor: string;
    patientName: string;
    medicalProcedureName: string;
    procedureDate: string;
    doctorName: string;
    checkin: boolean;
    checkinTime: string;
    medicalProcedureId: number;
}

const MedicalProcedeuresPage = () => {
    const [listAll, setListAll] = useState<ListMedicalProcedures[]>([]);
    const [getUserType] = useState(Number(sessionStorage.getItem('userType')));
    const [getUserId] = useState(sessionStorage.getItem('id'));
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const init = async () =>  await callListAll();
        init();
    }, []);


    const callListAll = async () => {
        let path = 'medicalProcedures';
        if(getUserType === 2) path = `${path}/listByDoctor/${getUserId}`
        if(getUserType === 3) path = `${path}/listByNurse/${getUserId}`
        if(getUserType === 4) path = `${path}/listByPatient/${getUserId}`

        const allMedicalProcedures = await api.get(path)
            .then(success => success)
            .catch(error => error.response)
            .then(response => response);
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response: ListMedicalProcedures[] = allMedicalProcedures.data.map((item: any) => {
            const res = {
                sectionColor: item.medicalProcedureType.medicalProcedureSection.color,
                patientName: item.patient.name,
                medicalProcedureName: item.medicalProcedureType.name,
                procedureDate: format(item.procedureDate, 'dd/MM/yyyy'),
                doctorName: item.doctor.name,
                checkin: item.checkin,
                checkinTime: item.checkinTime !== null ? format(new Date(item.checkinTime), 'HH:mm') : null,
                medicalProcedureId: item.id
            } as ListMedicalProcedures;
            return res;
        })

        setListAll(response)
    }

    const handleSearch = async () => {
        setLoading(true);
        await callListAll();
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
            <MedicalProcedureMain>
                <TitleComponent title='Procedimentos' />
                <DivButton>
                    <ButtonComponent icon={<IoSearch />} text='Pesquisar' onClick={handleSearch}/>
                </DivButton>
                <MedicalProcedureTableComponent data={listAll} />
            </MedicalProcedureMain>
        </div>
        </>
        
    );
}

export default MedicalProcedeuresPage;