import { Test, TestingModule } from '@nestjs/testing';
import { AssignedCardPunchesController } from './assigned-card-punches.controller';
import { AssignedCardPunchesService } from './assigned-card-punches.service';

describe('AssignedCardPunchesController', () => {
  let controller: AssignedCardPunchesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssignedCardPunchesController],
      providers: [AssignedCardPunchesService],
    }).compile();

    controller = module.get<AssignedCardPunchesController>(AssignedCardPunchesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
