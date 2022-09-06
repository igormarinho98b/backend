import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IncomeHistoryService } from './income-history.service';

@Controller('api/v1/income')
export class IncomeHistoryController {
  constructor(private incomeHistoryService: IncomeHistoryService){}

  @Post('create')
  async createIncome(@Body() data: any) {
    try {
      return await this.incomeHistoryService.create(data);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
  @Get(':id')
  async getAllIncomeById(@Param('id') id: string) {
    try {
      return await this.incomeHistoryService.findAll(id);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
