import { Module } from '@nestjs/common';
import { CardBlueprintsService } from './card-blueprints.service';
import { CardBlueprintsController } from './card-blueprints.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardBlueprint } from './entities/card-blueprint.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CardBlueprint])],
  controllers: [CardBlueprintsController],
  providers: [CardBlueprintsService],
})
export class CardBlueprintsModule {}
