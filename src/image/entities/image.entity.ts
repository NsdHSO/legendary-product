import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../../product/entities/product.entity';

@Entity()
export class ProductImage {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  fileName: string;
  @ManyToOne(() => Product, (product) => product.images)
  @JoinColumn()
  product: Product;
}
