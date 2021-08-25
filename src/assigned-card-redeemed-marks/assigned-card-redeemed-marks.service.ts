import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAssignedCardRedeemedMarkDto } from './dto/create-assigned-card-redeemed-mark.dto';
import { UpdateAssignedCardRedeemedMarkDto } from './dto/update-assigned-card-redeemed-mark.dto';
import { AssignedCardRedeemedMark } from './entities/assigned-card-redeemed-mark.entity';

@Injectable()
export class AssignedCardRedeemedMarksService {
  constructor(
    @InjectRepository(AssignedCardRedeemedMark)
    private assignedCardRedeemedMarkRepository: Repository<AssignedCardRedeemedMark>,
  ) {}

  async create(
    createAssignedCardRedeemedMarkDto: CreateAssignedCardRedeemedMarkDto,
  ) {
    return await this.assignedCardRedeemedMarkRepository.save(
      createAssignedCardRedeemedMarkDto,
    );
  }

  async findAll(assignedCardId: number) {
    return await this.assignedCardRedeemedMarkRepository.find({
      assignedCardId,
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} assignedCardRedeemedMark`;
  // }

  // update(
  //   id: number,
  //   updateAssignedCardRedeemedMarkDto: UpdateAssignedCardRedeemedMarkDto,
  // ) {
  //   return `This action updates a #${id} assignedCardRedeemedMark`;
  // }

  async remove(redeemedMarkId: number) {
    return await this.assignedCardRedeemedMarkRepository.delete(redeemedMarkId);
  }
}
