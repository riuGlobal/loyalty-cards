import { Module } from '@nestjs/common';
import { HeatbeatService } from './heatbeat.service';
import { HeatbeatController } from './heatbeat.controller';

@Module({
  controllers: [HeatbeatController],
  providers: [HeatbeatService]
})
export class HeatbeatModule {}
