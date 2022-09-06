import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { IncomeHistory } from "./entities/income-history.entity";
import { Users } from "./entities/users.entity";
@Module({
  imports: [TypeOrmModule.forFeature([Users,IncomeHistory])],
  exports: [TypeOrmModule],
})
export class MyFinanceModule {}
