import { Test, TestingModule } from '@nestjs/testing';
import { HeatbeatController } from './heatbeat.controller';
import { HeatbeatService } from './heatbeat.service';

describe('HeatbeatController', () => {
  let controller: HeatbeatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeatbeatController],
      providers: [HeatbeatService],
    }).compile();

    controller = module.get<HeatbeatController>(HeatbeatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
