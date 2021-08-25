import { Injectable } from '@nestjs/common';
import { CreateHeatbeatDto } from './dto/create-heatbeat.dto';
import { UpdateHeatbeatDto } from './dto/update-heatbeat.dto';

@Injectable()
export class HeatbeatService {
  create(createHeatbeatDto: CreateHeatbeatDto) {
    return 'This action adds a new heatbeat';
  }

  findAll() {
    return `This action returns all heatbeat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} heatbeat`;
  }

  update(id: number, updateHeatbeatDto: UpdateHeatbeatDto) {
    return `This action updates a #${id} heatbeat`;
  }

  remove(id: number) {
    return `This action removes a #${id} heatbeat`;
  }
}
