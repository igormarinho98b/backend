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
  @Get(':id')
  async getAllOutcomeById(@Param('id') id: string) {
    try {
      return await this.outcomeHistoryService.findAll(id);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Delete(':id')
  async DeleteOutcomeById(@Param('id') id: string) {
    try {
      return await this.outcomeHistoryService.delete(id);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Patch(':id')
  async UpdateOutcomeById(@Param('id') id: string,@Body() data: OutcomeDto) {
    try {
      return await this.outcomeHistoryService.update(id,data);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
