import { Entity, Column, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import BaseModel from './BaseModel';
import User from './User';
import MedicalProcedureType from './MedicalProcedureType';
import Appointments from './Appointments';
import Prescriptions from './Prescriptions';
import MedicalRecord from './MedicalRecord';

@Entity('medicalProcedure')
class MedicalProcedure extends BaseModel{

    @Column('boolean')
    checkin: boolean;

    @Column('datetime')
    checkinTime: Date;

    @Column('datetime')
    procedureDate: Date;

    @Column('varchar', { length: 255 })
    folder: string;

    @Column('int')
    doctorId: number;

    @Column('int')
    nurseId: number;

    @Column('int')
    patientId: number;

    //Relacionamentos
    @ManyToOne(type => User, user => user.patients)
    patient: User;

    @ManyToOne(type => User, user => user.doctors)
    doctor: User;

    @ManyToOne(type => User, user => user.nurses)
    nurse: User;

    @ManyToOne(type => MedicalProcedureType, medicalProcedureType => medicalProcedureType.medicalProcedures)
    medicalProcedureType: MedicalProcedureType;

    @OneToMany(type => Appointments, appointment => appointment.medicalProcedure)
    appointments: Appointments[];

    @OneToMany(type => Prescriptions, prescriptions => prescriptions.medicalProcedure)
    prescriptions: Prescriptions[];

    @OneToOne(type => MedicalRecord, medicalRecord => medicalRecord.medicalProcedure) 
    medicalRecord: MedicalRecord;

}

export default MedicalProcedure;
