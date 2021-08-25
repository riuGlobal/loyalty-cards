import { PartialType } from '@nestjs/mapped-types';
import { CreateAssignedCardRedeemedMarkDto } from './create-assigned-card-redeemed-mark.dto';

export class UpdateAssignedCardRedeemedMarkDto extends PartialType(CreateAssignedCardRedeemedMarkDto) {}
