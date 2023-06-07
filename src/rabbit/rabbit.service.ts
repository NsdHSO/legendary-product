import { Injectable } from "@nestjs/common";
import { CreateRabbitDto } from "./dto/create-rabbit.dto";
import { UpdateRabbitDto } from "./dto/update-rabbit.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Rabbit } from "./entities/rabbit.entity";

@Injectable()
export class RabbitService {
  constructor(
    @InjectRepository(Rabbit)
    private _rabbitRepository: Repository<Rabbit>,
  ) {}

  create(createRabbitDto: CreateRabbitDto) {
    const newRabbit = createRabbitDto;
    if (createRabbitDto.love === true) {
      newRabbit.sex = true;
    }
    const rabbitDAO = this._rabbitRepository.create(newRabbit);
    return this._rabbitRepository
      .save(rabbitDAO)
      .then((v) => "Rabbit has saved")
      .catch((err) => "Rabbit not saved");
  }

  findAll() {
    return this._rabbitRepository.find();
  }

  async getForCards() {
    const category = await this._rabbitRepository
      .createQueryBuilder("rabbit")
      .select("rabbit.name")
      .groupBy("rabbit.name")
      .getRawMany();
    const rabbit = await this._rabbitRepository.find();
    const cards = await this._rabbitRepository
      .createQueryBuilder("rabbit")
      .select("rabbit.name")
      .addSelect("SUM(rabbit.cost)", "cost")
      .addSelect("SUM(rabbit.ranting)", "ranting")
      .addSelect("rabbit.icon", "icon")
      .groupBy("rabbit.name")
      .getRawMany();

    return cards;
  }

  getCount() {
    return this._rabbitRepository.createQueryBuilder("rabbit").getCount();
  }

  findOne(id: number) {
    return `This action returns a #${id} rabbit`;
  }

  update(id: number, updateRabbitDto: UpdateRabbitDto) {
    return `This action updates a #${id} rabbit`;
  }

  remove(id: number) {
    return `This action removes a #${id} rabbit`;
  }
}
