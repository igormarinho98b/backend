import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, In, Repository } from 'typeorm';
import { IncomeDto } from '../dtos/Income.dto';
import { UserDto } from '../dtos/user.dto';
import { IncomeHistory } from '../entities/income-history.entity';
import { Users } from '../entities/users.entity';

@Injectable()
export class IncomeHistoryService {
  constructor(
    @InjectRepository(IncomeHistory)
    private incomeHistoryRepository: Repository<IncomeHistory>,
  ) {}

  async create(data:IncomeDto): Promise<IncomeHistory> {
    return this.incomeHistoryRepository.save(data);
  }

  async findAll(id:any): Promise<IncomeHistory[]> {
    return await this.incomeHistoryRepository.find({
      select: ['id', 'value','description'],
      where: { userId: id },
    });
  }
}