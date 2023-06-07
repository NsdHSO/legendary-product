import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { RabbitService } from "./rabbit.service";
import { CreateRabbitDto } from "./dto/create-rabbit.dto";
import { UpdateRabbitDto } from "./dto/update-rabbit.dto";

@Controller("rabbit")
export class RabbitController {
  constructor(private readonly rabbitService: RabbitService) {}

  @Post()
  create(@Body() createRabbitDto: CreateRabbitDto) {
    return this.rabbitService.create(createRabbitDto);
  }

  @Get()
  findAll() {
    return this.rabbitService.findAll();
  }

  @Get("count")
  async howMany() {
    return { countOfRabbit: await this.rabbitService.getCount() };
  }

  @Get("cards")
  async getCards() {
    return this.rabbitService.getForCards();
  }


  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.rabbitService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateRabbitDto: UpdateRabbitDto) {
    return this.rabbitService.update(+id, updateRabbitDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.rabbitService.remove(+id);
  }
}
