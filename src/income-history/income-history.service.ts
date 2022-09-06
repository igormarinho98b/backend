import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IncomeHistory } from '../infra/database/my-finances/entities/income-history.entity';
import { IncomeDto } from './dtos/Income.dto';

@Injectable()
export class IncomeHistoryService {
  constructor(
    @InjectRepository(IncomeHistory)
    private incomeHistoryRepository: Repository<IncomeHistory>,
  ) {}

  async create(data:IncomeDto): Promise<IncomeHistory> {
    return this.incomeHistoryRepository.save(data);
  }

  async findAll(id:string): Promise<IncomeHistory[]> {
    return await this.incomeHistoryRepository.find({
      select: ['id', 'value','description'],
      where: { userId: id },
    });
  }

  async update(id:string,data:any): Promise<any> {
    const result:any = await this.incomeHistoryRepository.createQueryBuilder()
    .update(data)
    .where({
        id
    })
    .execute()
    
    if(result.affected === 0){
      throw new Error(`There is no income to update with the id ${id}`)
     }
     return result
   }
    

  async delete(id:string): Promise<string> {
   const income =  await this.incomeHistoryRepository.createQueryBuilder()
    .delete()
    .from(IncomeHistory)
    .where("id = :id", { id })
    .execute();

    if(income.affected === 0){
     throw new Error(`There is no income to exclude with the id ${id}`)
    }
    return `Income successfully deleted`   
  }
}

