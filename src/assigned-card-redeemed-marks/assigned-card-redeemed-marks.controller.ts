import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AssignedCardRedeemedMarksService } from './assigned-card-redeemed-marks.service';
import { CreateAssignedCardRedeemedMarkDto } from './dto/create-assigned-card-redeemed-mark.dto';
import { UpdateAssignedCardRedeemedMarkDto } from './dto/update-assigned-card-redeemed-mark.dto';

@Controller('assigned-cards')
export class AssignedCardRedeemedMarksController {
  constructor(
    private readonly assignedCardRedeemedMarksService: AssignedCardRedeemedMarksService,
  ) {}

  @Post(':assignedCardId/redeemed-marks')
  async create(
    @Param('assignedCardId')
    assignedCardId: number,
    @Body()
    createAssignedCardRedeemedMarkDto: CreateAssignedCardRedeemedMarkDto,
  ) {
    return await this.assignedCardRedeemedMarksService.create({
      ...createAssignedCardRedeemedMarkDto,
      assignedCardId,
    });
  }

  @Get(':assignedCardId/redeemed-marks')
  async findAll(
    @Param('assignedCardId')
    assignedCardId: number,
  ) {
    return this.assignedCardRedeemedMarksService.findAll(assignedCardId);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.assignedCardRedeemedMarksService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body()
  //   updateAssignedCardRedeemedMarkDto: UpdateAssignedCardRedeemedMarkDto,
  // ) {
  //   return this.assignedCardRedeemedMarksService.update(
  //     +id,
  //     updateAssignedCardRedeemedMarkDto,
  //   );
  // }

  @Delete('redeemed-marks/:redeemedMarkId')
  remove(@Param('redeemedMarkId') redeemedMarkId: string) {
    return this.assignedCardRedeemedMarksService.remove(+redeemedMarkId);
  }
}
