import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IncomeHistory } from '../infra/database/my-finances/entities/income-history.entity';
import { Repository } from 'typeorm';
import { OutcomeHistory } from '../infra/database/my-finances/entities/outcome-history.entity';
import { BalanceDetailsDto } from './dtos/balance-details.dto';

@Injectable()
export class BalanceDetailsService {
  constructor(
    @InjectRepository(IncomeHistory)
    private incomeHistoryRepository: Repository<IncomeHistory>,
    @InjectRepository(OutcomeHistory)
    private outcomeHistoryRepository: Repository<OutcomeHistory>,
  ) { }

  async findAll(userId: string): Promise<BalanceDetailsDto[]> {
    let formatOutcomes
    let formatIncomes
    let resultoderBalances

    const getOutcomes = await this.getOutcomeHistory(userId)

      if(getOutcomes.length > 0){
        formatOutcomes = this.mapperToFormatBalances(getOutcomes,'outcome')
      }

    const getIncomes = await this.getIncomeHistory(userId)

      if(getIncomes.length > 0){
         formatIncomes = this.mapperToFormatBalances(getIncomes,'income')
      }
    
    resultoderBalances = formatOutcomes.concat(formatIncomes)

    const oderBalancesByDate = resultoderBalances.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    
    return oderBalancesByDate
  }

  private async getOutcomeHistory(id:string):Promise<OutcomeHistory[]>{
   return this.outcomeHistoryRepository
    .createQueryBuilder("OutcomeHistory")
    .where("userId = :id", { id: id })
    .getMany()
  }

  private async getIncomeHistory(id:string):Promise<IncomeHistory[]>{
    return this.incomeHistoryRepository
    .createQueryBuilder("IncomeHistory")
    .where("userId = :id", { id: id })
    .getMany()

   }

  private mapperToFormatBalances(balances,type){
    const resultBalances =  balances.map((balance => {
      return {
        id: balance.id,
        description:balance.description,
        value: balance.value,
        date:balance.date,
        userId:balance.userId,
        categoriesId:balance.categoriesId,
        type:type
      }}))

      return resultBalances
  }
}
