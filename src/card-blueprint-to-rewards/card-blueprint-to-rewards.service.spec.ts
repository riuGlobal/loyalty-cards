import { Test, TestingModule } from '@nestjs/testing';
import { CardBlueprintToRewardsService } from './card-blueprint-to-rewards.service';

describe('CardBlueprintToRewardsService', () => {
  let service: CardBlueprintToRewardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardBlueprintToRewardsService],
    }).compile();

    service = module.get<CardBlueprintToRewardsService>(CardBlueprintToRewardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
