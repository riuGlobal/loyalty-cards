import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CardBlueprintsService } from './card-blueprints.service';
import { CreateCardBlueprintDto } from './dto/create-card-blueprint.dto';
import { UpdateCardBlueprintDto } from './dto/update-card-blueprint.dto';

@Controller('card-blueprints')
export class CardBlueprintsController {
  constructor(private readonly cardBlueprintsService: CardBlueprintsService) {}

  @Post()
  async create(@Body() createCardBlueprintDto: CreateCardBlueprintDto) {
    return await this.cardBlueprintsService.create(createCardBlueprintDto);
  }

  @Get()
  async findAll() {
    return await this.cardBlueprintsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.cardBlueprintsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateCardBlueprintDto: UpdateCardBlueprintDto,
  // ) {
  //   return this.cardBlueprintsService.update(+id, updateCardBlueprintDto);
  // }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.cardBlueprintsService.remove(+id);
  }
}
