import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HeatbeatService } from './heatbeat.service';
import { CreateHeatbeatDto } from './dto/create-heatbeat.dto';
import { UpdateHeatbeatDto } from './dto/update-heatbeat.dto';

@Controller('heatbeat')
export class HeatbeatController {
  constructor(private readonly heatbeatService: HeatbeatService) {}

  @Post()
  create(@Body() createHeatbeatDto: CreateHeatbeatDto) {
    return this.heatbeatService.create(createHeatbeatDto);
  }

  @Get()
  findAll() {
    return this.heatbeatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.heatbeatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHeatbeatDto: UpdateHeatbeatDto) {
    return this.heatbeatService.update(+id, updateHeatbeatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.heatbeatService.remove(+id);
  }
}
