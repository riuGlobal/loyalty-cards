import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCardBlueprintToRewardDto } from './dto/create-card-blueprint-to-reward.dto';
import { UpdateCardBlueprintToRewardDto } from './dto/update-card-blueprint-to-reward.dto';
import { CardBlueprintToReward } from './entities/card-blueprint-to-reward.entity';

@Injectable()
export class CardBlueprintToRewardsService {
  constructor(
    @InjectRepository(CardBlueprintToReward)
    private cardBlueprintToRewardRepository: Repository<CardBlueprintToReward>,
  ) {}
  async create(createCardBlueprintToRewardDto: CreateCardBlueprintToRewardDto) {
    return await this.cardBlueprintToRewardRepository.save(
      createCardBlueprintToRewardDto,
    );
  }

  async findAll() {
    return this.cardBlueprintToRewardRepository.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} cardBlueprintToReward`;
  }

  update(
    id: number,
    updateCardBlueprintToRewardDto: UpdateCardBlueprintToRewardDto,
  ) {
    return `This action updates a #${id} cardBlueprintToReward`;
  }

  async remove(id: number) {
    return this.cardBlueprintToRewardRepository.delete(id);
  }
}
