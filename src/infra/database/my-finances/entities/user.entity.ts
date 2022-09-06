import {IsEmail, IsString } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IncomeHistory } from "./income-history.entity";


@Entity()
export class User{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsString()
  @Column()
  name: string;

  @IsEmail()
  @Column()
  email: string;
  
  @IsString()
  @Column()
  cognitoClientId: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(type => IncomeHistory, incomeHistory => incomeHistory.userId) incomeHistory: IncomeHistory[];  
}