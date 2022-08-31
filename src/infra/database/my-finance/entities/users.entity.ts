import { IsBoolean, IsEmail, IsString } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

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
  
  @IsString()
  @Column()
  cognitoClientId: string;

  @CreateDateColumn()
  createdAt:Date;
}