import { IsBoolean, IsEmail, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Users{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsString()
  @Column()
  name: string;

  @IsEmail()
  @Column()
  email: string;
  
  @IsBoolean()
  @Column()
  statusCognito: boolean;

  @Column()
  createdAt:Date;
}