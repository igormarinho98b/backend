import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categories } from "./categories.entity";
import { User } from "./user.entity";


@Entity()

export class OutcomeHistory{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  description:string

  @ApiProperty()
  @Column({ nullable: false, type: "float" })
  value:number

  @ApiProperty()
  @Column()
  userId:string

  @ApiProperty()
  @Column()
  categoriesId:string

  @CreateDateColumn()
  createdAt:Date;

  @CreateDateColumn()
  updatedAt:Date;

  @ManyToOne(type => User, user => user.id) user: User; 
  @ManyToOne(type => Categories, categories => categories.id) categories: Categories; 
}