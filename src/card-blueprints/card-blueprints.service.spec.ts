import { Test, TestingModule } from '@nestjs/testing';
import { CardBlueprintsService } from './card-blueprints.service';

describe('CardBlueprintsService', () => {
  let service: CardBlueprintsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardBlueprintsService],
    }).compile();

    service = module.get<CardBlueprintsService>(CardBlueprintsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
