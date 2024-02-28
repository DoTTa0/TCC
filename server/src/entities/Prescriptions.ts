import { Column, Entity, ManyToOne } from "typeorm";
import BaseModel from "./BaseModel";
import MedicalProcedure from "./MedicalProcedure";

@Entity('prescriptions')
class Prescriptions extends BaseModel {
    @Column('varchar', { length: 100 })
    medicament: string;

    @Column('varchar', { length: 50 })
    dosage: string;

    @Column('text')
    instructions: string;

    //Relacionamento
    @ManyToOne(type => MedicalProcedure, medicalProcedure => medicalProcedure.prescriptions) 
    medicalProcedure: MedicalProcedure;

}

export default Prescriptions;