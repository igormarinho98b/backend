import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../infra/database/my-finances/entities/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dtos/user.dto';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(data: UserDto): Promise<UserDto> {
    return await this.usersRepository.save(data);
  }

  async getUserIdByCognitoId(email: string): Promise<any> {
    console.log("email",email)
    const response = await this.usersRepository.findOne({where:{email}});
    return response.id
  }
}
