import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyFinanceController } from './my-finance.controller';
import { MyFinanceService } from './my-finance.service';

@Module({
  imports: [],
  providers: [MyFinanceService],
  controllers: [],
})
export class MyFinanceModule {}
