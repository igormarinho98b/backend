import { Module } from '@nestjs/common';
import { IncomeHistoryService } from './income-history.service';
import { IncomeHistoryController } from './income-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncomeHistory } from '../infra/database/my-finances/entities/income-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IncomeHistory])],
  providers: [IncomeHistoryService],
  controllers: [IncomeHistoryController]
})
export class IncomeHistoryModule {}
