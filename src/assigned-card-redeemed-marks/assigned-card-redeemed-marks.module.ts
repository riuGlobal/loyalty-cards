import { Module } from '@nestjs/common';
import { AssignedCardRedeemedMarksService } from './assigned-card-redeemed-marks.service';
import { AssignedCardRedeemedMarksController } from './assigned-card-redeemed-marks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignedCardRedeemedMark } from './entities/assigned-card-redeemed-mark.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AssignedCardRedeemedMark])],
  controllers: [AssignedCardRedeemedMarksController],
  providers: [AssignedCardRedeemedMarksService],
})
export class AssignedCardRedeemedMarksModule {}
