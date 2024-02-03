import { useState } from "react";
import ExpandableComponent from "../ExpandableComponent";
import InputComponent from "../InputComponent";
import { DivFormInfo, FormInfo, FormInfoItem, MedicalProcedureCheckinMain } from "./styles";
import { FaCircle } from "react-icons/fa";

const MedicalProcedureCheckin = () => {
    const [name, setName] = useState('');

    return( 
    <MedicalProcedureCheckinMain>
        <ExpandableComponent title='Procedimento'>
            <FormInfo>
                <DivFormInfo>
                    <FormInfoItem width='25%'>
                        <InputComponent title='Nome do procedimento' value={name} setValue={setName}/>
                    </FormInfoItem>
                    <FormInfoItem width='25%'>
                        <InputComponent title='Médico responsável' value={name} setValue={setName}/>
                    </FormInfoItem>
                    <FormInfoItem width='10%'>
                        <InputComponent title='Data' value={name} setValue={setName}/>
                    </FormInfoItem>
                    <FormInfoItem width='10%'>
                        <InputComponent title='Hora' value={name} setValue={setName}/>
                    </FormInfoItem>
                    <FormInfoItem icon={true} width='30%'>
                        <FaCircle color="#2ED47A"/>
                    </FormInfoItem>
                </DivFormInfo>
            </FormInfo>
        </ExpandableComponent>
    </MedicalProcedureCheckinMain>
    )
}

export default MedicalProcedureCheckin;