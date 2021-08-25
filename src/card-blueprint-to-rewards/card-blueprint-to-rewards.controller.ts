import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CardBlueprintToRewardsService } from './card-blueprint-to-rewards.service';
import { CreateCardBlueprintToRewardDto } from './dto/create-card-blueprint-to-reward.dto';
import { UpdateCardBlueprintToRewardDto } from './dto/update-card-blueprint-to-reward.dto';

@Controller('card-blueprint-to-rewards')
export class CardBlueprintToRewardsController {
  constructor(
    private readonly cardBlueprintToRewardsService: CardBlueprintToRewardsService,
  ) {}

  @Post()
  async create(
    @Body() createCardBlueprintToRewardDto: CreateCardBlueprintToRewardDto,
  ) {
    return await this.cardBlueprintToRewardsService.create(
      createCardBlueprintToRewardDto,
    );
  }

  @Get()
  async findAll() {
    return await this.cardBlueprintToRewardsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.cardBlueprintToRewardsService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCardBlueprintToRewardDto: UpdateCardBlueprintToRewardDto,
  ) {
    return await this.cardBlueprintToRewardsService.update(
      +id,
      updateCardBlueprintToRewardDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.cardBlueprintToRewardsService.remove(+id);
  }
}
