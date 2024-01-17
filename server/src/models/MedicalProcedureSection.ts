import { Column, Entity, OneToMany } from "typeorm";
import BaseModel from "./BaseModel";
import MedicalProcedureType from "./MedicalProcedureType";

@Entity('medicalProcedureSection')
class MedicalProcedureSection extends BaseModel {
    @Column('varchar', { length: 7 })
    color: string;

    @Column('varchar', { length: 255 })
    description: string;

    //Relacionamento
    @OneToMany(type => MedicalProcedureType, medicalProcedureType => medicalProcedureType.medicalProcedureSection)
    medicalProcedureTypes: MedicalProcedureType[];

}

export default MedicalProcedureSection;