import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { Rabbit } from "../../rabbit/entities/rabbit.entity";

@Entity()
@Unique(["name"])
export class RabbitCategory {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  name: string;
  @Column({ nullable: false })
  icon: string;
  @OneToMany(() => Rabbit, (rabbit) => rabbit.category)
  rabbits: Rabbit[];
}
