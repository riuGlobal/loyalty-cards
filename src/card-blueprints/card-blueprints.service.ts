import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCardBlueprintDto } from './dto/create-card-blueprint.dto';
import { UpdateCardBlueprintDto } from './dto/update-card-blueprint.dto';
import { CardBlueprint } from './entities/card-blueprint.entity';

@Injectable()
export class CardBlueprintsService {
  constructor(
    @InjectRepository(CardBlueprint)
    private cardBlueprintRepository: Repository<CardBlueprint>,
  ) {}

  async create(createCardBlueprintDto: CreateCardBlueprintDto) {
    return await this.cardBlueprintRepository.save(createCardBlueprintDto);
  }

  async findAll() {
    return (
      await this.cardBlueprintRepository.find({
        relations: ['cardBlueprintToRewards'],
      })
    ).map((blueprint) => {
      blueprint.rewards = blueprint.cardBlueprintToRewards?.map(
        (blueprintToReward) => {
          console.log('==----', blueprintToReward)
          return blueprintToReward.reward;
        },
      );
      delete blueprint.cardBlueprintToRewards;
      console.log('-------', blueprint);
      return blueprint;
    });
  }

  async findOne(id: number) {
    return `This action returns a #${id} cardBlueprint`;
  }

  update(id: number, updateCardBlueprintDto: UpdateCardBlueprintDto) {
    return `This action updates a #${id} cardBlueprint`;
  }

  async remove(id: number) {
    return await this.cardBlueprintRepository.delete(id);
  }
}
