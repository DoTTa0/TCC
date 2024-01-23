import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import BaseModel from "./BaseModel";
import MedicalProcedure from "./MedicalProcedure";

@Entity('medicalRecord')
class MedicalRecord extends BaseModel {
    @Column('text')
    doctorRecord: string;

    @Column('text')
    nurseRecord: string;

    //Relacionamento
    @OneToOne(type => MedicalProcedure, medicalProcedure => medicalProcedure.medicalRecord) @JoinColumn() 
    medicalProcedure: MedicalProcedure;

}

export default MedicalRecord;