import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductImage } from '../../image/entities/image.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({
    type: 'decimal',
    default: 0.0,
  })
  cost: number;
  @Column({ default: 0 })
  ranting: number;
  @Column({ default: false })
  love: boolean;
  @OneToMany(() => ProductImage, (image) => image.product, { cascade: true })
  images: ProductImage[];
}
