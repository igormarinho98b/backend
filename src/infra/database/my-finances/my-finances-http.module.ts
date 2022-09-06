import { Module } from '@nestjs/common';
import { MyFinanceController } from './my-finances.controller';
import { MyFinanceModule } from './my-finances.module';
import { IncomeHistoryService } from './services/income-history.service';
import { UsersService } from './services/users.service';

@Module({
  imports: [MyFinanceModule],
  providers: [UsersService,IncomeHistoryService],
  controllers: [MyFinanceController],
  exports: [MyFinanceModule]
  
})
export class MyFinanceHttpModule {}
