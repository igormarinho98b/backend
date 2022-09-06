import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IncomeDto } from '../infra/database/my-finances/dtos/Income.dto';
import { Repository } from 'typeorm';
import { IncomeHistory } from '../infra/database/my-finances/entities/income-history.entity';

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
