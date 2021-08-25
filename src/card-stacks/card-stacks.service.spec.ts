import { Test, TestingModule } from '@nestjs/testing';
import { CardStacksService } from './card-stacks.service';

describe('CardStacksService', () => {
  let service: CardStacksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardStacksService],
    }).compile();

    service = module.get<CardStacksService>(CardStacksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
