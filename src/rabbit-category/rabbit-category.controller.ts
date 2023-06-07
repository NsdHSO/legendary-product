import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RabbitCategoryService } from './rabbit-category.service';
import { CreateRabbitCategoryDto } from './dto/create-rabbit-category.dto';
import { UpdateRabbitCategoryDto } from './dto/update-rabbit-category.dto';

@Controller('rabbit-category')
export class RabbitCategoryController {
  constructor(private readonly rabbitCategoryService: RabbitCategoryService) {}

  @Post()
  create(@Body() createRabbitCategoryDto: CreateRabbitCategoryDto) {
    return this.rabbitCategoryService.create(createRabbitCategoryDto);
  }

  @Get()
  findAll() {
    return this.rabbitCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rabbitCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRabbitCategoryDto: UpdateRabbitCategoryDto) {
    return this.rabbitCategoryService.update(+id, updateRabbitCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rabbitCategoryService.remove(+id);
  }
}
