import { PartialType } from '@nestjs/mapped-types';
import { CreateRabbitCategoryDto } from './create-rabbit-category.dto';

export class UpdateRabbitCategoryDto extends PartialType(CreateRabbitCategoryDto) {}
