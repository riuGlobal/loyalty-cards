import { Test, TestingModule } from '@nestjs/testing';
import { HeatbeatService } from './heatbeat.service';

describe('HeatbeatService', () => {
  let service: HeatbeatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeatbeatService],
    }).compile();

    service = module.get<HeatbeatService>(HeatbeatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
