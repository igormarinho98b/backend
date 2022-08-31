import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Matches } from 'class-validator';

export class UserDto {
  name: string;
  email: string;
  cognitoClientId: string;
}
