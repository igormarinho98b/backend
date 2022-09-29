import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { OutcomeHistory } from '../infra/database/my-finances/entities/outcome-history.entity';
import { OutcomeDto } from './dtos/outcome.dto';

@Injectable()
export class OutcomeHistoryService {
  constructor(
    @InjectRepository(OutcomeHistory)
    private outcomeHistoryRepository: Repository<OutcomeHistory>,
  ) {}

  async create(data:OutcomeDto): Promise<OutcomeHistory> {
    return this.outcomeHistoryRepository.save(data);
  }

  async findAll(id:string): Promise<OutcomeHistory[]> {
    return await this.outcomeHistoryRepository.find({
      select: ['id', 'value','description'],
      where: { userId: id },
    });
    
  }

  async update(id:string,data:any): Promise<any> {
    const result:any = await this.outcomeHistoryRepository.createQueryBuilder()
    .update(data)
    .where({
        id
    })
    .execute()
    
    if(result.affected === 0){
      throw new Error(`There is no outcome to update with the id ${id}`)
     }
     return result
   }
    

  async delete(id:string): Promise<string> {
   const outcome =  await this.outcomeHistoryRepository.createQueryBuilder()
    .delete()
    .from(OutcomeHistory)
    .where("id = :id", { id })
    .execute();

    if(outcome.affected === 0){
     throw new Error(`There is no outcome to exclude with the id ${id}`)
    }
    return `Outcome successfully deleted`   
  }

  async balanceOutcome(id:string): Promise<number> {
    const outcomes:any = await this.outcomeHistoryRepository
    .createQueryBuilder("outcome_history")
    .where("outcome_history.userId = :userId", { userId: id })
    .getMany()

    return outcomes.map((outcome)=>outcome.value).reduce((values,total)=>values +total)
  }
}