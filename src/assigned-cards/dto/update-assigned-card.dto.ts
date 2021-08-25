import { PartialType } from '@nestjs/mapped-types';
import { CreateAssignedCardDto } from './create-assigned-card.dto';

export class UpdateAssignedCardDto extends PartialType(CreateAssignedCardDto) {}
