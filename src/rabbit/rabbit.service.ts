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
    const { love, ...rabbitData } = createRabbitDto;
    const newRabbit = Object.assign({}, rabbitData);

    if (love === true) {
      newRabbit.sex = true;
    }

    const rabbitDAO = this._rabbitRepository.create(newRabbit);
    return this._rabbitRepository
      .save(rabbitDAO)
      .then(() => "Rabbit has been saved.")
      .catch((err) => {
        return "Failed to save the rabbit: " + err.message;
      });
  }

  findAll() {
    return this._rabbitRepository.find();
  }

  // async getForCards() {
  //   const categories = await this._rabbitRepository
  //     .createQueryBuilder("rabbit")
  //     .select("rabbit.category.name", "category")
  //     .addSelect("rabbit.category.icon", "icon")
  //     .addSelect("SUM(rabbit.cost)", "cost")
  //     .addSelect("SUM(rabbit.ranting)", "ranting")
  //     .groupBy("rabbit.category.name , rabbit.category.icon")
  //     .getRawMany();
  //
  //   return categories;
  // }
  /**
   * Retrieves aggregated information about rabbits based on category.
   * @returns {Promise<Object[]>} An array of objects containing aggregated information about rabbits based on category.
   */
  async getForCards() {
    /**
     * Retrieves aggregated information about rabbits based on category.
     * @typedef {Object} RabbitCategoryInfo
     * @property {string} category_name - The name of the category.
     * @property {string} category_icon - The icon of the category.
     * @property {number} avg_cost - The average cost of rabbits in the category.
     * @property {number} avg_ranting - The average ranting of rabbits in the category.
     * @property {number} count - The count of rabbits in the category.
     */

    /**
     * Retrieves aggregated information about rabbits based on category.
     * @type {RabbitCategoryInfo[]}
     */
    const rabbits = await this._rabbitRepository
      .createQueryBuilder("rabbit")
      .select([
        "category.name",
        "category.icon",
        "ROUND(AVG(rabbit.cost), 2) AS avg_cost",
        "ROUND(AVG(rabbit.ranting), 2) AS avg_ranting",
        "COUNT(rabbit.id) AS count",
      ])
      .leftJoin("rabbit.category", "category")
      .groupBy("category.name, category.icon")
      .getRawMany();

    return rabbits.map((rabbit) => ({
      /**
       * The name of the category.
       * @type {string}
       */
      category_name: rabbit.category_name,
      /**
       * The icon of the category.
       * @type {string}
       */
      category_icon: rabbit.category_icon,
      /**
       * The average cost of rabbits in the category.
       * @type {number}
       */
      avg_cost: parseFloat(rabbit.avg_cost),
      /**
       * The average ranting of rabbits in the category.
       * @type {number}
       */
      avg_ranting: parseFloat(rabbit.avg_ranting),
      /**
       * The count of rabbits in the category.
       * @type {number}
       */
      count: rabbit.count,
    }));
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
