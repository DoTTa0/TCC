import { Entity, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import UserType from './UserType';
import BaseModel from './BaseModel';
import Address from './Address';
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
    user: User;

}

export default MedicalHistory;
