import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AssignedCardsService } from './assigned-cards.service';
import { CreateAssignedCardDto } from './dto/create-assigned-card.dto';
import { UpdateAssignedCardDto } from './dto/update-assigned-card.dto';

@Controller('assigned-cards')
export class AssignedCardsController {
  constructor(private readonly assignedCardsService: AssignedCardsService) {}

  @Post()
  async create(@Body() createAssignedCardDto: CreateAssignedCardDto) {
    return await this.assignedCardsService.create(createAssignedCardDto);
  }

  @Get()
  async findAll(
    @Query('onlyFullyPunched') onlyFullyPunched = false,
    @Query('onlyNotFullyPunched') onlyNotFullyPunched = false,
    @Query('userId') userId: string,
  ) {
    return await this.assignedCardsService.findAll(
      onlyFullyPunched,
      onlyNotFullyPunched,
      userId,
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.assignedCardsService.findOne(+id);
  }

  // @Patch(':id')
  // async update(@Param('id') id: string, @Body() updateAssignedCardDto: UpdateAssignedCardDto) {
  //   return await this.assignedCardsService.update(+id, updateAssignedCardDto);
  // }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.assignedCardsService.remove(+id);
  }
}
