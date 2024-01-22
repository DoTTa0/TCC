import { Entity, Column, ManyToOne, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import UserType from './UserType';
import BaseModel from './BaseModel';
import Address from './Address';
import MedicalHistory from './MedicalHistory';
import MedicalProcedure from './MedicalProcedure';

@Entity('users')
class User extends BaseModel{

    @Column('varchar', { length: 255 })
    name: string;

    @Column('varchar', { length: 255 })
    email: string;

    @Column('date')
    birthDate: Date;

    @Column('varchar', { length: 50 })
    gender: string;

    @Column('varchar', { length: 15 })
    phone: string;

    @Column('varchar', { length: 14 })
    cpf: string;

    @Column('varchar', { length: 12 })
    rg: string;

    @Column('varchar', { length: 255 })
    nameMother: string;

    @Column('varchar', { length: 9 })
    crm: string;

    @Column('varchar', { length: 15 })
    coren: string;

    //Relacionamentos
    @ManyToOne(type => UserType, userType => userType.users)
    userType: UserType;

    @OneToOne(type => Address) @JoinColumn() 
    address: Address;

    @OneToMany(type => MedicalHistory, medicalHistory => medicalHistory.user)
    medicalHistories: MedicalHistory[];

    @OneToMany(type => MedicalProcedure, medicalProcedure => medicalProcedure.patient)
    patients: MedicalProcedure[];

    @OneToMany(type => MedicalProcedure, medicalProcedure => medicalProcedure.doctor)
    doctors: MedicalProcedure[];

    @OneToMany(type => MedicalProcedure, medicalProcedure => medicalProcedure.nurse)
    nurses: MedicalProcedure[];

}

export default User;
