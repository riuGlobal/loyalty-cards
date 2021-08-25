import { Module } from '@nestjs/common';
import { AssignedCardPunchesService } from './assigned-card-punches.service';
import { AssignedCardPunchesController } from './assigned-card-punches.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignedCardPunch } from './entities/assigned-card-punch.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AssignedCardPunch])],
  controllers: [AssignedCardPunchesController],
  providers: [AssignedCardPunchesService],
})
export class AssignedCardPunchesModule {}
