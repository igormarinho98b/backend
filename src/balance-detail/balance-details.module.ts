import { Module } from '@nestjs/common';
import { BalanceDetailsService } from './balance-details.service';
import { BalanceDetailsController } from './balance-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncomeHistory } from '../infra/database/my-finances/entities/income-history.entity';
import { OutcomeHistory } from '../infra/database/my-finances/entities/outcome-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IncomeHistory,OutcomeHistory])],
  providers: [BalanceDetailsService],
  controllers: [BalanceDetailsController]
})
export class BalanceDetailsModule {}
