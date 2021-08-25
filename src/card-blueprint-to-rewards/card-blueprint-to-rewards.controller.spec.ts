import { Test, TestingModule } from '@nestjs/testing';
import { CardBlueprintToRewardsController } from './card-blueprint-to-rewards.controller';
import { CardBlueprintToRewardsService } from './card-blueprint-to-rewards.service';

describe('CardBlueprintToRewardsController', () => {
  let controller: CardBlueprintToRewardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardBlueprintToRewardsController],
      providers: [CardBlueprintToRewardsService],
    }).compile();

    controller = module.get<CardBlueprintToRewardsController>(CardBlueprintToRewardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
