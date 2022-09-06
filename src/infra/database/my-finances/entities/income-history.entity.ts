import { UUIDVersion } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()

export class IncomeHistory{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description:string

  @Column()
  value:number

  @Column()
  userId:string

  @CreateDateColumn()
  createdAt:Date;

  @CreateDateColumn()
  updatedAt:Date;

}