import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
  @Column()
  icon: string;
  @Column({ nullable: false })
  name: string;
}
