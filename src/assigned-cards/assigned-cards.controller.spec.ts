import { Test, TestingModule } from '@nestjs/testing';
import { AssignedCardsController } from './assigned-cards.controller';
import { AssignedCardsService } from './assigned-cards.service';

describe('AssignedCardsController', () => {
  let controller: AssignedCardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssignedCardsController],
      providers: [AssignedCardsService],
    }).compile();

    controller = module.get<AssignedCardsController>(AssignedCardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
