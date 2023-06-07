import { Module } from "@nestjs/common";
import { RabbitCategoryService } from "./rabbit-category.service";
import { RabbitCategoryController } from "./rabbit-category.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RabbitCategory } from "./entities/rabbit-category.entity";

@Module({
  imports: [TypeOrmModule.forFeature([RabbitCategory])],
  controllers: [RabbitCategoryController],
  providers: [RabbitCategoryService],
  exports: [TypeOrmModule, RabbitCategoryService],
})
export class RabbitCategoryModule {}
