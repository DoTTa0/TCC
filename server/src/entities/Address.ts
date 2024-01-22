import { Entity, Column } from 'typeorm';
import BaseModel from './BaseModel';

@Entity('address')
class Address extends BaseModel {
    @Column('varchar', { length: 255 })
    street: string;

    @Column('varchar', { length: 20 })
    number: string;

    @Column('varchar', { length: 100 })
    city: string;

    @Column('varchar', { length: 50 })
    state: string;

    @Column('varchar', { length: 10 })
    cep: string;

    @Column('varchar', { length: 255 })
    complement: string;

}

export default Address;
