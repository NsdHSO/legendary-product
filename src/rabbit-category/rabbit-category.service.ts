import { Injectable } from '@nestjs/common';
import { CreateRabbitCategoryDto } from './dto/create-rabbit-category.dto';
import { UpdateRabbitCategoryDto } from './dto/update-rabbit-category.dto';

@Injectable()
export class RabbitCategoryService {
  create(createRabbitCategoryDto: CreateRabbitCategoryDto) {
    return 'This action adds a new rabbitCategory';
  }

  findAll() {
    return `This action returns all rabbitCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rabbitCategory`;
  }

  update(id: number, updateRabbitCategoryDto: UpdateRabbitCategoryDto) {
    return `This action updates a #${id} rabbitCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} rabbitCategory`;
  }
}
