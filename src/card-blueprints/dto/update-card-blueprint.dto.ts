import { PartialType } from '@nestjs/mapped-types';
import { CreateCardBlueprintDto } from './create-card-blueprint.dto';

export class UpdateCardBlueprintDto extends PartialType(CreateCardBlueprintDto) {}
