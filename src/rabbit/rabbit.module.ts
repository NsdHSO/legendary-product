import { forwardRef, Module } from "@nestjs/common";
import { RabbitService } from "./rabbit.service";
import { RabbitController } from "./rabbit.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Rabbit } from "./entities/rabbit.entity";
import { RabbitCategory } from "../rabbit-category/entities/rabbit-category.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Rabbit])],
  controllers: [RabbitController],
  providers: [RabbitService],
  exports: [TypeOrmModule, RabbitService],
})
export class RabbitModule {}
