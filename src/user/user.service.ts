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
}
