import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import BaseModel from "./BaseModel";
import MedicalProcedureSection from "./MedicalProcedureSection";
import MedicalProcedure from "./MedicalProcedure";

@Entity('medicalProcedureType')
class MedicalProcedureType extends BaseModel {
    @Column('varchar', { length: 255 })
    name: string;

    @Column('varchar', { length: 255 })
    description: string;

    //Relacionamento
    @ManyToOne(type => MedicalProcedureSection, medicalProcedureSection => medicalProcedureSection.medicalProcedureTypes)
    medicalProcedureSection: MedicalProcedureSection;

    @OneToMany(type => MedicalProcedure, medicalProcedure => medicalProcedure.medicalProcedureType)
    medicalProcedures: MedicalProcedure[];

}

export default MedicalProcedureType;