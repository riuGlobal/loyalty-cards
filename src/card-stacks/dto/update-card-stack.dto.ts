import { PartialType } from '@nestjs/mapped-types';
import { CreateCardStackDto } from './create-card-stack.dto';

export class UpdateCardStackDto extends PartialType(CreateCardStackDto) {}
