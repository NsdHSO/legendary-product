import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from '../../customer/entities/customer.entity';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userId: number;
  @Column()
  service: string;
  @Column({ type: 'date' })
  startDate: string;
  @Column({ type: 'date' })
  endDate: string;
  @Column()
  hours: number;
  @Column()
  rate: number;
  @ManyToOne(() => Customer, (customer) => customer.invoices)
  @JoinColumn()
  customer: Customer;
}
