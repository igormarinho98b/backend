import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IncomeDto } from './dtos/Income.dto';
import { IncomeHistoryService } from './services/income-history.service';


@Controller('api/v1/finances')
export class MyFinanceController {
  constructor(private incomeHistoryService: IncomeHistoryService){}

  @Post('incomes')
  async createIncome(@Body() data: any) {
    try {
      return await this.incomeHistoryService.create(data);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
  @Get('incomes/:id')
  async getAllIncomesById(@Param('id') id: string) {
    try {
      return await this.incomeHistoryService.findAll(id);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
