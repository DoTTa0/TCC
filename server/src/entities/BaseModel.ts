import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

class BaseModel {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('boolean')
    flagActive: boolean;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

}

export default BaseModel