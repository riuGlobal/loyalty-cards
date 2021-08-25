import { PartialType } from '@nestjs/mapped-types';
import { CreateCardBlueprintToRewardDto } from './create-card-blueprint-to-reward.dto';

export class UpdateCardBlueprintToRewardDto extends PartialType(CreateCardBlueprintToRewardDto) {}
