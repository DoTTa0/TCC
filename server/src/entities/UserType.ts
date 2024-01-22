import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import User from './User';
import BaseModel from './BaseModel';

@Entity('userType')
class UserType extends BaseModel{
    @Column('varchar', { length: 255 })
    name: string;

    //Relacionamentos
    @OneToMany(type => User, user => user.userType)
    users: User[];

}

export default UserType;
