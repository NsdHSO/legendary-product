import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductImage } from '../image/entities/image.entity';
import { ImageService } from '../image/image.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  @Inject(forwardRef(() => ImageService))
  private readonly _productImageService: ImageService;

  constructor(
    @InjectRepository(Product) private _productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: Product, file: any) {
    const clone = JSON.parse(JSON.stringify(createProductDto));
    const product = new Product();
    const productImage = new ProductImage();
    product.cost = clone.cost;
    product.love = clone.love;
    product.name = clone.name;
    product.ranting = clone.ranting;
    productImage.fileName = file.path;
    console.log(file);
    productImage.product = product;
    return await this._productRepository.save(
      JSON.parse(JSON.stringify(product)),
    );
  }

  async findAll() {
    return await this._productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.images', 'image')
      .getMany();
  }

  async findOne(id: number) {
    return await this._productRepository.findOneBy({ id: id });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    let productDAO = await this._productRepository
      .createQueryBuilder('product')
      .where({ id: updateProductDto.id })
      .leftJoinAndSelect('product.images', 'images')
      .getOne();
    const product = Object.assign({}, productDAO);
    if (updateProductDto.name !== undefined) {
      product.name = updateProductDto.name;
    }
    if (updateProductDto.cost !== undefined) {
      product.cost = updateProductDto.cost;
    }
    if (updateProductDto.ranting !== undefined) {
      product.ranting = updateProductDto.ranting;
    }
    if (updateProductDto.love !== undefined) {
      product.love = updateProductDto.love;
    }
    if (updateProductDto.images !== undefined) {
      updateProductDto.images.map((image) => {
        if (image.id !== undefined) {
          this._productImageService.findOne(image.id).then((img) => {
            product.images.find((imgP) => img.id === imgP.id).fileName =
              image.fileName;
          });
        } else {
          this._productImageService
            .create({
              fileUrl: image.fileName,
              productId: updateProductDto.id,
            })
            .then((images) => {
              product.images = [images];
            });
        }
      });
    }
    productDAO = product;
    this._productRepository.create(productDAO);
    return await this._productRepository.save(productDAO);
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
