import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { OutcomeDto } from './dtos/outcome.dto';
import { OutcomeHistoryService } from './outcome-history.service';


@ApiBearerAuth()
@ApiTags('Outcome')
@Controller('api/v1/outcome')
export class OutcomeHistoryController {
  constructor(private outcomeHistoryService: OutcomeHistoryService){}

  @Post('create')
  async createOutcome(@Body() data: OutcomeDto) {
    try {
      return await this.outcomeHistoryService.create(data);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
  @Get(':userId')
  async getAllOutcomeById(@Param('userId') userId: string) {
    try {
      return await this.outcomeHistoryService.findAll(userId);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Delete(':outcomeId')
  async DeleteOutcomeById(@Param('outcomeId') outcomeId: string) {
    try {
      return await this.outcomeHistoryService.delete(outcomeId);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Patch(':outcomeId')
  async UpdateOutcomeById(@Param('outcomeId') outcomeId: string,@Body() data: OutcomeDto) {
    try {
      return await this.outcomeHistoryService.update(outcomeId,data);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get('balance/:userId')
  async getBalanceOutcome(@Param('userId') userId: string) {
    try {
      return await this.outcomeHistoryService.balanceOutcome(userId);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
