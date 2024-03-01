import { FC, Key, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import IMedicalProcedure from "../../interfaces/IMedicalProcedure";
import IAppointments from "../../interfaces/IAppointments";
import IPrescriptions from "../../interfaces/IPrescriptions";
import IMedicialHistory from "../../interfaces/IMedicalHistory";
import IMedicalProcedureRequest from "../../interfaces/Request/IMedicalProcedureRequest";
import IMedicalRecordRequest from "../../interfaces/Request/IMedicalRecordRequest";
import ExpandableComponent from "../../components/ExpandableComponent";
import InputComponent from "../../components/InputComponent";
import TitleComponent from "../../components/TitleComponent";
import { BlockAddFile, Button, Checkin, CheckinLabel, DivButton, DivExamesInfo, DivFormInfo, DownloadFile, ExamesInfo, FormInfo, FormInfoItem, InputAddFile, MedicalProceduresDetailsMain } from "./styles";
import { FaCircle, FaTrash } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import TextAreaComponent from "../../components/TextAreaComponent";
import { format } from "date-fns";
import { IoSend } from "react-icons/io5";
import IPrescriptionsRequest from "../../interfaces/Request/IPrescriptionsRequest";
import ModalComponent from "../../components/ModalComponent";

interface MedicalProceduresDetailsProps {
    medicalProceduresId?: string;
}
const MedicalProceduresDetails: FC<MedicalProceduresDetailsProps> = ({medicalProceduresId}) => {
    const { id } = useParams();
    const [medicalProcedure, setMedicalProcedure] = useState<IMedicalProcedure>({} as IMedicalProcedure );
    const [prescriptions, setPrescriptions] = useState<string | undefined>('');
    const [getUserType] = useState(Number(sessionStorage.getItem('userType')))
    const [medicamento, setMedicamento] = useState('');
    const [dose, setDose] = useState('');
    const [instucao, setInstrucao] = useState('');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [filesArray, setFilesArray] = useState<any>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [indexMed, setIndexMed] = useState('');


    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const getMedicalProceduresId = medicalProceduresId ? medicalProceduresId : id;

    useEffect(() => {
        const init = async () =>  {
            await callMedicalProcedureById();
            
        };
        init();
    }, []);

    const callMedicalProcedureById = async () => {
        const response = await api.get(`medicalProcedures/${getMedicalProceduresId}`)
            .then(success => success)
            .catch(error => error.response)
            .then(response => response);
        const { data } = response;
        console.log(data)
        const responseData = {
            checkin: data.checkin,
            checkinTime: data.checkinTime ? format(data.checkinTime, 'HH:mm') : '-',
            doctorName: data.doctor.name,
            folder: data.folder,
            id: data.id,
            medicalProcedureName: data.medicalProcedureType.name,
            medicalProcedureSection: data.medicalProcedureType.medicalProcedureSection.color,
            nurseName: data.nurse.name,
            procedureDate: format(data.procedureDate, 'dd/MM/yyyy'),
            procedureHour: format(data.procedureDate, 'HH:mm'),
            medcialRecordNurse: data.medicalRecord?.nurseRecord ?? '',
            medicalRecordDoctor: data.medicalRecord?.doctorRecord ?? '',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            appointments: data.appointments?.map((item: any) => {
                return {
                    appointmentDate: format(item.appointmentDate, 'dd/MM/yyyy'),
                    id: item.id,
                    observations: item.observations,
                    reason: item.reason
                } as IAppointments
            }),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            prescriptions: data.prescriptions?.map((item: any) => {
                return {
                    id: item.id,
                    dosage: item.dosage,
                    instructions: item.instructions,
                    medicament: item.medicament
                } as IPrescriptions
            }),
            medcialHistory: {
                allergies: data.patient.medicalHistories[0].allergies ?? '',
                diseaseHistory: data.patient.medicalHistories[0].diseaseHistory ?? '',
                previousSurgeries: data.patient.medicalHistories[0].previousSurgeries ?? ''
            } as IMedicialHistory,
            patientName: data.patient.name
        }  as IMedicalProcedure 

        const dataPrescription =  setDataPrescription(responseData.prescriptions);

        await callListFile(responseData.folder);
        setPrescriptions(dataPrescription)
        setMedicalProcedure(responseData);
    }

    const updateMedicalProcedure = async () => {
        const response = await api.put(`medicalProcedures/${getMedicalProceduresId}`, createRequest())
            .then(success => success)
            .catch(error => error.response)
            .then(response => response);

            if (response.status === 200) return alert('Procedimento atualizado!')
    }

    const createRequest = (): IMedicalProcedureRequest => {
        const medicalRecord = {
            doctorRecord: medicalProcedure.medicalRecordDoctor,
            nurseRecord: medicalProcedure.medcialRecordNurse
        } as IMedicalRecordRequest

        const prescriptions = medicalProcedure.prescriptions?.map((item => {
            return {
                id: item.id,
                dosage: item.dosage,
                instructions: item.instructions,
                medicament: item.medicament
            } as IPrescriptionsRequest
        }))
        
        return {
           medicalRecord,
           prescriptions
        } as IMedicalProcedureRequest
    }

    const handleButton = async () => {
        await updateMedicalProcedure();
    }

    const getAppointments = (index : string): string => {

        if(medicalProcedure.appointments && index === 'reason') return medicalProcedure.appointments[0]?.reason ?? '';
        if(medicalProcedure.appointments && index === 'appointmentDate') return medicalProcedure.appointments[0]?.appointmentDate ?? '';
        if(medicalProcedure.appointments && index === 'observations') return medicalProcedure.appointments[0]?.observations ?? '';

        return '';
    }

    const addPrescription = () => {

        if (medicamento === '' || dose === '' || instucao === '') return;
        medicalProcedure.prescriptions?.push({
            id: 0,
            dosage: dose,
            instructions: instucao,
            medicament: medicamento
        } as IPrescriptions)

        const dataPrescription = setDataPrescription(medicalProcedure.prescriptions);

        setPrescriptions(dataPrescription);
        setMedicamento('');
        setDose('');
        setInstrucao('');
    }

    const removePrescription = () => {

        if(!verificarNumero(indexMed)) return alert('Não é um número inteiro positivo') 

        medicalProcedure.prescriptions?.splice((Number(indexMed)-1), 1);

        const dataPrescription = setDataPrescription(medicalProcedure.prescriptions);

        setPrescriptions(dataPrescription);
        setMedicamento('');
        setDose('');
        setInstrucao('');
        setIndexMed('');
        handleCloseModal();
    }

    const verificarNumero = (string: string): boolean => {
        return /^\d+$/.test(string);
    }

    const setDataPrescription = (data: IPrescriptions[] | undefined): string | undefined => {
        return data === null ? '' :  data?.reduce((accumulator, currentValue, index) => {
            const value = `${index + 1}) ${currentValue.medicament} X ${currentValue.dosage} - ${currentValue.instructions}`
            return accumulator + value + "\n";
          }, "");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const callListFile = async (folder: string) => {
        const response = await api.get(`exames/list/${folder}`)
            .then(success => success)
            .catch(error => error.response)
            .then(response => response)

        const { data } = response;
    
        setFilesArray(data)
    }

    const addFiles = async (filesEvent: FileList | null) => {

        const files = filesEvent !== null ? [...filesEvent] : [];
        const formData = new FormData()
        formData.append('folder', medicalProcedure.folder)
        files?.forEach((item) => formData.append('files', item))

        await api.post('exames/upload', formData,
            { headers: { 'Content-Type': 'multipart/form-data' } })
            .then(success => success)
            .catch(error => error.response)
            .then(response => response)

        setTimeout(async () => await callListFile(medicalProcedure.folder), 5000)

    }
    return (
        <>
        {isModalOpen && 
        <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal}>
            <h2>Insira o número do medicamento que deseja remover</h2>
            <DivFormInfo>
                <FormInfoItem width='30%'>
                    <InputComponent title='Índice'  value={indexMed}  setValue={setIndexMed}/>
                </FormInfoItem>
                <FormInfoItem width='5%'>
                    <IoSend fontSize={30} cursor={'pointer'} color='red' onClick={removePrescription}/>
                </FormInfoItem>
            </DivFormInfo>
        </ModalComponent>}
        <div className="page">
            <MedicalProceduresDetailsMain>
                <TitleComponent title='Detalhes do procedimento' />
                <ExpandableComponent title='Informações Gerais'>
                    <FormInfo>
                        <DivFormInfo>
                            <FormInfoItem width='30%'>
                                <InputComponent title='Paciente' disable={true} value={medicalProcedure.patientName} />
                            </FormInfoItem>
                            <FormInfoItem width='30%'>
                                <InputComponent title='Médico Responsável' disable={true} value={medicalProcedure.doctorName} />
                            </FormInfoItem>
                            <FormInfoItem width='30%'>
                                <InputComponent title='Enfermeiro responsável' disable={true} value={medicalProcedure.nurseName} />
                            </FormInfoItem>
                        </DivFormInfo>
                        <DivFormInfo>
                            <FormInfoItem width='30%'>
                                <InputComponent title='Nome do procedimento' disable={true} value={medicalProcedure.medicalProcedureName} />
                            </FormInfoItem>
                            <FormInfoItem width='5%'>
                                <FaCircle fontSize={25} color={medicalProcedure.medicalProcedureSection}/>
                            </FormInfoItem>
                            <FormInfoItem width='10%'>
                                <InputComponent title='Data' disable={true} value={medicalProcedure.procedureDate} />
                            </FormInfoItem>
                            <FormInfoItem width='10%'>
                                <InputComponent title='Horário' disable={true} value={medicalProcedure.procedureHour} />
                            </FormInfoItem>
                            <FormInfoItem width='10%'>
                                <InputComponent title='Hr. check-in' disable={true} value={medicalProcedure.checkinTime} />
                            </FormInfoItem>
                            <FormInfoItem width='20%'>
                                <CheckinLabel>Check-in</CheckinLabel>
                                <Checkin checkin={medicalProcedure.checkin}>{ medicalProcedure.checkin ? 'Presente' : 'Ausente'}</Checkin>
                            </FormInfoItem>
                        </DivFormInfo>
                    </FormInfo>
                </ExpandableComponent>
                <ExpandableComponent title='Exames'>
                    <ExamesInfo>
                        
                        {// eslint-disable-next-line @typescript-eslint/no-explicit-any 
                        filesArray.map((item: any, index: Key | null | undefined) => {
                            return (
                                <DivExamesInfo key={index}>
                                    <DownloadFile
                                    href={`${api.defaults.baseURL}/exames/download/${item.id}/${item.name}`}
                                    download
                                    target="_blank"
                                    >
                                        {item.name}
                                    </DownloadFile>
                                </DivExamesInfo>
                            )
                            })
                        }
                    </ExamesInfo>
                    <DivButton>
                        <BlockAddFile htmlFor='file'>
                        <IoIosAddCircle />
                            <InputAddFile
                                id='file'
                                multiple={true}
                                accept="image/*,.pdf"
                                onChange={async (event) => await addFiles(event.target.files)}
                            />
                        </BlockAddFile>
                    </DivButton>
                </ExpandableComponent>
                <ExpandableComponent title='Consultas'>
                    {medicalProcedure.appointments && medicalProcedure.appointments?.length > 0 && 
                    <FormInfo>
                        <DivFormInfo>
                            <FormInfoItem width='50%'>
                                <InputComponent title='Motivo da consulta' disable={true} value={getAppointments('reason')} />
                            </FormInfoItem>
                            {/* <FormInfoItem width='30%'>
                                <InputComponent title='Médico Responsável' disable={true} value={getAppointments('reason')} setValue={setName}/>
                            </FormInfoItem> */}
                            <FormInfoItem width='10%'>
                                <InputComponent title='Data da consulta' disable={true} value={getAppointments('appointmentDate')} />
                            </FormInfoItem>
                        </DivFormInfo>
                        <DivFormInfo>
                            <FormInfoItem width='100%'>
                                <TextAreaComponent title='Observações' disable={true} value={getAppointments('observations')}/>
                            </FormInfoItem>
                        </DivFormInfo>
                    </FormInfo>}
                    {!medicalProcedure.appointments || medicalProcedure.appointments?.length === 0 && <p>Sem consultas anteriores</p>}
                </ExpandableComponent>
                <ExpandableComponent title='Histórico médico'>
                    <FormInfo>
                        <DivFormInfo>
                            <FormInfoItem width='100%'>
                                <TextAreaComponent title='Alergias' col={5} disable={true} value={medicalProcedure.medcialHistory?.allergies} />
                            </FormInfoItem>
                        </DivFormInfo>
                        <DivFormInfo>
                            <FormInfoItem width='100%'>
                                <TextAreaComponent title='Histórico de doenças' disable={true} col={5} value={medicalProcedure.medcialHistory?.diseaseHistory} />
                            </FormInfoItem>
                        </DivFormInfo>
                        <DivFormInfo>
                            <FormInfoItem width='100%'>
                                <TextAreaComponent title='Cirurgias anteriores' disable={true} col={5} value={medicalProcedure.medcialHistory?.previousSurgeries} />
                            </FormInfoItem>
                        </DivFormInfo>
                    </FormInfo>
                </ExpandableComponent>
                {(getUserType !== 2 && getUserType !== 4) &&   
                    <ExpandableComponent title='Prontuário - Enfermeiro'>
                        <FormInfo>
                            <DivFormInfo>
                                <FormInfoItem width='100%'>
                                    <TextAreaComponent title='' col={10}  object={medicalProcedure} nameObject={'medcialRecordNurse'} value={medicalProcedure.medcialRecordNurse} setValue={setMedicalProcedure}/>
                                </FormInfoItem>
                            </DivFormInfo>
                        </FormInfo>
                    </ExpandableComponent>  
                }
                {(getUserType !== 3 && getUserType !== 4) &&
                    <ExpandableComponent title='Prontuário - Médico'>
                        <FormInfo>
                            <DivFormInfo>
                                <FormInfoItem width='100%'>
                                    <TextAreaComponent title='' col={10} object={medicalProcedure} nameObject={'medicalRecordDoctor'} value={medicalProcedure.medicalRecordDoctor} setValue={setMedicalProcedure}/>
                                </FormInfoItem>
                            </DivFormInfo>
                        </FormInfo>
                    </ExpandableComponent>
                }
                <ExpandableComponent title='Prescrisção Médica'>
                    <FormInfo>
                    {getUserType === 2 && 
                        <DivFormInfo justifyContent='flex-end'>
                            <FormInfoItem width='5%'>
                                <FaTrash fontSize={30} cursor={'pointer'} color='red' onClick={handleOpenModal}/>
                            </FormInfoItem>
                        </DivFormInfo>
                    }
                        <DivFormInfo>
                            <FormInfoItem width='100%'>
                                <TextAreaComponent title='' col={10} disable={true} nameObject={'medicalRecordDoctor'}  value={prescriptions ?? ''} setValue={setPrescriptions}/>
                            </FormInfoItem>
                        </DivFormInfo>
                        {getUserType === 2 &&
                        <>
                        <DivFormInfo>
                            <FormInfoItem width='30%'>
                                <InputComponent title='Medicamento'  value={medicamento}  setValue={setMedicamento}/>
                            </FormInfoItem>
                            <FormInfoItem width='30%'>
                                <InputComponent title='Dose'  value={dose} setValue={setDose}/>
                            </FormInfoItem>
                            <FormInfoItem width='30%'>
                                <InputComponent title='Instruções'  value={instucao} setValue={setInstrucao}/>
                            </FormInfoItem>
                            <FormInfoItem width='5%'>
                                <IoSend fontSize={30} cursor={'pointer'} color={medicalProcedure.medicalProcedureSection} onClick={addPrescription}/>
                            </FormInfoItem>
                        </DivFormInfo>
                        </>
                        }
                    </FormInfo>
                </ExpandableComponent>
                {(getUserType !== 1 && getUserType !== 4) &&
                    <DivButton>
                        <Button onClick={handleButton}>
                            Salvar
                        </Button>
                    </DivButton>}
            </MedicalProceduresDetailsMain>
        </div>
        </>
    )
}

export default MedicalProceduresDetails;