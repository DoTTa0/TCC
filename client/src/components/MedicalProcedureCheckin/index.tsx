import { FC } from "react";
import ExpandableComponent from "../ExpandableComponent";
import InputComponent from "../InputComponent";
import { DivFormInfo, FormInfo, FormInfoItem, MedicalProcedureCheckinMain } from "./styles";
import { FaCircle } from "react-icons/fa";
import IMedicalProcedure from "../../interfaces/IMedicalProcedure";

interface MedicalProcedureCheckinProps {
    medicalProcedure: IMedicalProcedure;
}

const MedicalProcedureCheckin: FC<MedicalProcedureCheckinProps> = ({medicalProcedure}) => {

    return( 
    <MedicalProcedureCheckinMain>
        <ExpandableComponent title='Procedimento'>
            <FormInfo>
                <DivFormInfo>
                    <FormInfoItem width='25%'>
                        <InputComponent  disable={true} title='Nome do procedimento' value={medicalProcedure.medicalProcedureName} />
                    </FormInfoItem>
                    <FormInfoItem width='25%'>
                        <InputComponent disable={true} title='Médico responsável' value={medicalProcedure.doctorName} />
                    </FormInfoItem>
                    <FormInfoItem width='10%'>
                        <InputComponent disable={true} title='Data' value={medicalProcedure.procedureDate} />
                    </FormInfoItem>
                    <FormInfoItem width='10%'>
                        <InputComponent disable={true} title='Hora' value={medicalProcedure.procedureHour} />
                    </FormInfoItem>
                    <FormInfoItem icon={true} width='30%'>
                        <FaCircle color={medicalProcedure.medicalProcedureSection}/>
                    </FormInfoItem>
                </DivFormInfo>
            </FormInfo>
        </ExpandableComponent>
    </MedicalProcedureCheckinMain>
    )
}

export default MedicalProcedureCheckin;