import { Module } from '@nestjs/common';
import { AssignedCardsService } from './assigned-cards.service';
import { AssignedCardsController } from './assigned-cards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignedCard } from './entities/assigned-card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AssignedCard])],
  controllers: [AssignedCardsController],
  providers: [AssignedCardsService],
})
export class AssignedCardsModule {}
