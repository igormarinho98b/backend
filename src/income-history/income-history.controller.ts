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
  @Get(':userId')
  async getAllIncomeById(@Param('userId') userId: string) {
    try {
      return await this.incomeHistoryService.findAll(userId);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':incomeId')
  async DeleteIncomeById(@Param('incomeId') incomeId: string) {
    try {
      return await this.incomeHistoryService.delete(incomeId);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':incomeId')
  async UpdateIncomeById(@Param('incomeId') incomeId: string, @Body() data: IncomeDto) {
    try {
      return await this.incomeHistoryService.update(incomeId, data);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get('balance/:userId')
  async getBalanceOutcome(@Param('userId') id: string) {
    try {
      return await this.incomeHistoryService.balanceIncome(id);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
