import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

  public isFullyPunched(card: AssignedCard): boolean {
    return card.punches.length >= card.numberOfPunchBoxes;
  }

  async create(createAssignedCardDto: CreateAssignedCardDto) {
    return await this.assignedCardRepository.save(createAssignedCardDto);
  }

  async findAll(
    onlyFullyPunched = false,
    onlyNotFullyPunched = false,
    userId = '',
  ) {
    let cards = await this.assignedCardRepository.find({
      relations: [
        'cardStack',
        'cardStack.cardBlueprint',
        'cardStack.cardBlueprint.cardBlueprintToRewards',
        'cardStack.cardBlueprint.cardBlueprintToRewards.reward',
      ],
    });

    if (onlyFullyPunched) {
      cards = cards.filter((card) => this.isFullyPunched(card));
    }

    if (onlyNotFullyPunched) {
      cards = cards.filter((card) => !this.isFullyPunched(card));
    }

    if (userId?.length > 0) {
      cards = cards.filter((card) => userId.trim() == card.userId);
    }

    return cards.map((assignedCard) => {
      const { cardStack, ...card } = assignedCard;
      return card;
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
