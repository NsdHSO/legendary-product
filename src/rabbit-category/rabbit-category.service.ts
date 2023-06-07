import {
  BadRequestException,
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from "@nestjs/common";
import { CreateRabbitCategoryDto } from "./dto/create-rabbit-category.dto";
import { UpdateRabbitCategoryDto } from "./dto/update-rabbit-category.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Rabbit } from "../rabbit/entities/rabbit.entity";
import { Repository } from "typeorm";
import { RabbitCategory } from "./entities/rabbit-category.entity";

@Injectable()
export class RabbitCategoryService {
  constructor(
    @InjectRepository(RabbitCategory)
    private _rabbitCategoryRepository: Repository<RabbitCategory>,
  ) {}

  create(createRabbitCategoryDto: CreateRabbitCategoryDto) {
    const newRabbit = createRabbitCategoryDto;
    newRabbit.name =
      newRabbit.name[0].toUpperCase() +
      newRabbit.name.slice(1, newRabbit.name.length);

    const rabbitCategoryDAO = this._rabbitCategoryRepository.create(newRabbit);
    return this._rabbitCategoryRepository
      .save(rabbitCategoryDAO)
      .then((v) => "Rabbit category has saved")
      .catch((err) => {
        if (err.code === "23505") {
          throw new HttpException(
            "The provided name already exists",
            HttpStatus.CONFLICT,
          );
        }
      });
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
