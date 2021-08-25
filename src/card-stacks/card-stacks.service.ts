import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCardStackDto } from './dto/create-card-stack.dto';
import { UpdateCardStackDto } from './dto/update-card-stack.dto';
import { CardStack } from './entities/card-stack.entity';

@Injectable()
export class CardStacksService {
  constructor(
    @InjectRepository(CardStack)
    private cardStackRepository: Repository<CardStack>,
  ) {}
  async create(createCardStackDto: CreateCardStackDto) {
    return await this.cardStackRepository.save(createCardStackDto);
  }

  async findAll(): Promise<CardStack[]> {
    return await this.cardStackRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} cardStack`;
  // }

  // update(id: number, updateCardStackDto: UpdateCardStackDto) {
  //   return `This action updates a #${id} cardStack`;
  // }

  async remove(id: number) {
    return await this.cardStackRepository.delete(id);
  }
}
