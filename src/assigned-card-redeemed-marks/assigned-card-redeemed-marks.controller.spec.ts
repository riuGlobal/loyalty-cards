import { Test, TestingModule } from '@nestjs/testing';
import { AssignedCardRedeemedMarksController } from './assigned-card-redeemed-marks.controller';
import { AssignedCardRedeemedMarksService } from './assigned-card-redeemed-marks.service';

describe('AssignedCardRedeemedMarksController', () => {
  let controller: AssignedCardRedeemedMarksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssignedCardRedeemedMarksController],
      providers: [AssignedCardRedeemedMarksService],
    }).compile();

    controller = module.get<AssignedCardRedeemedMarksController>(AssignedCardRedeemedMarksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
