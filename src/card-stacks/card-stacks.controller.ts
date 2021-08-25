import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CardStacksService } from './card-stacks.service';
import { CreateCardStackDto } from './dto/create-card-stack.dto';
import { UpdateCardStackDto } from './dto/update-card-stack.dto';

@Controller('card-stacks')
export class CardStacksController {
  constructor(private readonly cardStacksService: CardStacksService) {}

  @Post()
  async create(@Body() createCardStackDto: CreateCardStackDto) {
    return await this.cardStacksService.create(createCardStackDto);
  }

  @Get()
  async findAll() {
    return await this.cardStacksService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.cardStacksService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCardStackDto: UpdateCardStackDto) {
  //   return this.cardStacksService.update(+id, updateCardStackDto);
  // }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.cardStacksService.remove(id);
  }
}
