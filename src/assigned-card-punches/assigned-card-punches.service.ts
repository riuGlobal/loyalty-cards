import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAssignedCardPunchDto } from './dto/create-assigned-card-punch.dto';
import { UpdateAssignedCardPunchDto } from './dto/update-assigned-card-punch.dto';
import { AssignedCardPunch } from './entities/assigned-card-punch.entity';

@Injectable()
export class AssignedCardPunchesService {
  constructor(
    @InjectRepository(AssignedCardPunch)
    private assignedCardPunchRepository: Repository<AssignedCardPunch>,
  ) {}
  async create(createAssignedCardPunchDto: CreateAssignedCardPunchDto) {
    return this.assignedCardPunchRepository.save(createAssignedCardPunchDto);
  }

  async findAll(id: number) {
    return await this.assignedCardPunchRepository.find({
      assignedCardId: id,
    });
  }

  async findOne(id: number) {
    return `This action returns a #${id} assignedCardPunch`;
  }

  update(id: number, updateAssignedCardPunchDto: UpdateAssignedCardPunchDto) {
    return `This action updates a #${id} assignedCardPunch`;
  }

  async remove(punchId: number) {
    return this.assignedCardPunchRepository.delete(punchId);
  }
}
