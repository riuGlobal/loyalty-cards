import { Test, TestingModule } from '@nestjs/testing';
import { AssignedCardRedeemedMarksService } from './assigned-card-redeemed-marks.service';

describe('AssignedCardRedeemedMarksService', () => {
  let service: AssignedCardRedeemedMarksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssignedCardRedeemedMarksService],
    }).compile();

    service = module.get<AssignedCardRedeemedMarksService>(AssignedCardRedeemedMarksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
