import { PartialType } from '@nestjs/mapped-types';
import { CreateAssignedCardPunchDto } from './create-assigned-card-punch.dto';

export class UpdateAssignedCardPunchDto extends PartialType(CreateAssignedCardPunchDto) {}
