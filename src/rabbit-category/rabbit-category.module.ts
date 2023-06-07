import { Module } from '@nestjs/common';
import { RabbitCategoryService } from './rabbit-category.service';
import { RabbitCategoryController } from './rabbit-category.controller';

@Module({
  controllers: [RabbitCategoryController],
  providers: [RabbitCategoryService]
})
export class RabbitCategoryModule {}
