import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ default: 0.0 })
  cost: number;
  @Column({ default: 0 })
  ranting: number;
  @Column({ default: false })
  love: boolean;
}
