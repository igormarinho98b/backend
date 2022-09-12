import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OutcomeHistory } from '../infra/database/my-finances/entities/outcome-history.entity';
import { OutcomeHistoryController } from './outcome-history.controller';
import { OutcomeHistoryService } from './outcome-history.service';

@Module({
  imports: [TypeOrmModule.forFeature([OutcomeHistory])],
  controllers: [OutcomeHistoryController],
  providers: [OutcomeHistoryService]
})
export class OutcomeHistoryModule {}
