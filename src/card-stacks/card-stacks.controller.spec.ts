import { Test, TestingModule } from '@nestjs/testing';
import { CardStacksController } from './card-stacks.controller';
import { CardStacksService } from './card-stacks.service';

describe('CardStacksController', () => {
  let controller: CardStacksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardStacksController],
      providers: [CardStacksService],
    }).compile();

    controller = module.get<CardStacksController>(CardStacksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
