import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { IncomeHistoryService } from './income-history.service';
import { ApiTags } from '@nestjs/swagger';
import { IncomeDto } from './dtos/Income.dto';

@ApiTags('Income')
@Controller('api/v1/income')
export class IncomeHistoryController {
  constructor(private incomeHistoryService: IncomeHistoryService){}

  @Post('create')
  async createIncome(@Body() data: IncomeDto) {
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

  @Delete(':id')
  async DeleteIncomeById(@Param('id') id: string) {
    try {
      return await this.incomeHistoryService.delete(id);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Patch(':id')
  async UpdateIncomeById(@Param('id') id: string,@Body() data: IncomeDto) {
    try {
      return await this.incomeHistoryService.update(id,data);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
