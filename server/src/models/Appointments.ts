import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import BaseModel from "./BaseModel";
import MedicalProcedure from "./MedicalProcedure";

@Entity('appointments')
class Appointments extends BaseModel {
    @Column('text')
    reason: string;

    @Column('text')
    observations: string;

    @Column('datetime')
    appointmentDate: Date;

    //Relacionamento
    @ManyToOne(type => MedicalProcedure, medicalProcedure => medicalProcedure.appointments) 
    medicalProcedure: MedicalProcedure;

}

export default Appointments;