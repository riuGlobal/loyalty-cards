import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AssignedCardPunchesService } from './assigned-card-punches.service';
import { CreateAssignedCardPunchDto } from './dto/create-assigned-card-punch.dto';
import { UpdateAssignedCardPunchDto } from './dto/update-assigned-card-punch.dto';

@Controller('assigned-cards')
export class AssignedCardPunchesController {
  constructor(
    private readonly assignedCardPunchesService: AssignedCardPunchesService,
  ) {}

  @Post('/:assignedCardId/punches')
  async create(
    @Param('assignedCardId') assignedCardId: number,
    @Body() createAssignedCardPunchDto: CreateAssignedCardPunchDto,
  ) {
    return await this.assignedCardPunchesService.create({
      ...createAssignedCardPunchDto,
      assignedCardId,
    });
  }

  @Get('/:assignedCardId/punches')
  async findAll(@Param('assignedCardId') assignedCardId: number) {
    return await this.assignedCardPunchesService.findAll(assignedCardId);
  }

  // @Get('/:assignedCardId/punches/:id')
  // async findOne(
  //   @Param('assignedCardId') assignedCardId: number,
  //   @Param('id') id: string,
  // ) {
  //   return await this.assignedCardPunchesService.findOne(+id);
  // }

  // @Patch(':id')
  // async update(
  //   @Param('id') id: string,
  //   @Body() updateAssignedCardPunchDto: UpdateAssignedCardPunchDto,
  // ) {
  //   return await this.assignedCardPunchesService.update(
  //     +id,
  //     updateAssignedCardPunchDto,
  //   );
  // }

  @Delete('punches/:punchId')
  async remove(@Param('punchId') punchId: string) {
    return await this.assignedCardPunchesService.remove(+punchId);
  }
}
