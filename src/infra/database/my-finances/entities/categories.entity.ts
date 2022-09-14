import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IncomeHistory } from './income-history.entity';
import { OutcomeHistory } from './outcome-history.entity';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @IsString()
  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;
  
  @OneToMany(type => IncomeHistory, incomeHistory => incomeHistory.categoriesId) incomeHistory: IncomeHistory[];   

  @OneToMany(type => OutcomeHistory, outcomeHistory => outcomeHistory.categoriesId) OutcomeHistory: OutcomeHistory[];  
}
