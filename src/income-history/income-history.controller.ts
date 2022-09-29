import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { IncomeHistoryService } from './income-history.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IncomeDto } from './dtos/Income.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiBearerAuth()
@ApiTags('Income')
@Controller('api/v1/income')
export class IncomeHistoryController {
  constructor(private incomeHistoryService: IncomeHistoryService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async createIncome(@Body() data: IncomeDto) {
    try {
      return await this.incomeHistoryService.create(data);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getAllIncomeById(@Param('id') id: string) {
    try {
      return await this.incomeHistoryService.findAll(id);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async DeleteIncomeById(@Param('id') id: string) {
    try {
      return await this.incomeHistoryService.delete(id);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async UpdateIncomeById(@Param('id') id: string, @Body() data: IncomeDto) {
    try {
      return await this.incomeHistoryService.update(id, data);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get('balance/:id')
  async getBalanceOutcome(@Param('id') id: string) {
    try {
      return await this.incomeHistoryService.balanceIncome(id);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
