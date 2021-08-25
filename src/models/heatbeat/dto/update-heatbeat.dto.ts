import { PartialType } from '@nestjs/mapped-types';
import { CreateHeatbeatDto } from './create-heatbeat.dto';

export class UpdateHeatbeatDto extends PartialType(CreateHeatbeatDto) {}
