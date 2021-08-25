import { Module } from '@nestjs/common';
import { CardBlueprintToRewardsService } from './card-blueprint-to-rewards.service';
import { CardBlueprintToRewardsController } from './card-blueprint-to-rewards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardBlueprintToReward } from './entities/card-blueprint-to-reward.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CardBlueprintToReward])],
  controllers: [CardBlueprintToRewardsController],
  providers: [CardBlueprintToRewardsService],
})
export class CardBlueprintToRewardsModule {}
