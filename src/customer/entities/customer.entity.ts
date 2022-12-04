import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Invoice } from '../../invoice/entities/invoice.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  // TODO: create table
  @Column()
  address: string;
  @OneToMany(() => Invoice, (invoice) => invoice.customer)
  invoices: Invoice[];
}
