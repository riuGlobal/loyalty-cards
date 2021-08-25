import { Module } from '@nestjs/common';
import { CardStacksService } from './card-stacks.service';
import { CardStacksController } from './card-stacks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardStack } from './entities/card-stack.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CardStack])],
  controllers: [CardStacksController],
  providers: [CardStacksService],
})
export class CardStacksModule {}
