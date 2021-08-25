import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CardStack } from 'src/card-stacks/entities/card-stack.entity';
import { Repository } from 'typeorm';
import { CreateAssignedCardDto } from './dto/create-assigned-card.dto';
import { UpdateAssignedCardDto } from './dto/update-assigned-card.dto';
import { AssignedCard } from './entities/assigned-card.entity';

@Injectable()
export class AssignedCardsService {
  constructor(
    @InjectRepository(AssignedCard)
    private assignedCardRepository: Repository<AssignedCard>,
  ) {}

  async create(createAssignedCardDto: CreateAssignedCardDto) {
    return await this.assignedCardRepository.save(createAssignedCardDto);
  }

  async findAll() {
    return (
      await this.assignedCardRepository.find({
        relations: [
          'cardStack',
          'cardStack.cardBlueprint',
          'cardStack.cardBlueprint.cardBlueprintToRewards',
          'cardStack.cardBlueprint.cardBlueprintToRewards.reward',
        ],
      })
    ).map((assignedCard) => {
      const { cardStack, ...card } = assignedCard;
      return {
        ...card,
        rewards:
          assignedCard?.cardStack?.cardBlueprint?.cardBlueprintToRewards.map(
            (blueprintToReward) => blueprintToReward.reward,
          ),
      };
    });
  }

  async findOne(id: number) {
    return `This action returns a #${id} assignedCard`;
  }

  async update(id: number, updateAssignedCardDto: UpdateAssignedCardDto) {
    return `This action updates a #${id} assignedCard`;
  }

  async remove(id: number) {
    return await this.assignedCardRepository.delete(id);
  }
}
