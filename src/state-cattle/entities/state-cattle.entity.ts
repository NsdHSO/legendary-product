import {
  Column,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class StateCattle {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  state: string;
}
