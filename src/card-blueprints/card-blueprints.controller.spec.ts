import { Test, TestingModule } from '@nestjs/testing';
import { CardBlueprintsController } from './card-blueprints.controller';
import { CardBlueprintsService } from './card-blueprints.service';

describe('CardBlueprintsController', () => {
  let controller: CardBlueprintsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardBlueprintsController],
      providers: [CardBlueprintsService],
    }).compile();

    controller = module.get<CardBlueprintsController>(CardBlueprintsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
