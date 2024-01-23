import { Entity, Column, ManyToOne } from 'typeorm';
import BaseModel from './BaseModel';
import User from './User';

@Entity('medicalHistory')
class MedicalHistory extends BaseModel{

    @Column('text')
    diseaseHistory: string;

    @Column('text')
    previousSurgeries: string;

    @Column('text')
    allergies: string;

    //Relacionamentos
    @ManyToOne(type => User, user => user.medicalHistories)
    patient: User;

}

export default MedicalHistory;
