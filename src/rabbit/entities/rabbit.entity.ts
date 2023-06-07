import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RabbitCategory } from "../../rabbit-category/entities/rabbit-category.entity";

@Entity()
export class Rabbit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "decimal",
    default: 0.0,
  })
  cost: number;
  @Column({ default: 0 })
  ranting: number;
  @Column({ default: false })
  love: boolean;
  @Column({ default: false })
  sex: boolean;

  @ManyToOne(() => RabbitCategory, (category) => category.rabbits, {
    eager: true,
  })
  @JoinColumn({ name: "categoryId", referencedColumnName: "name" })
  category: RabbitCategory;
}
