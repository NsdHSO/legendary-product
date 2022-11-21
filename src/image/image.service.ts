import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductService } from '../product/product.service';
import { ProductImage } from './entities/image.entity';

@Injectable()
export class ImageService {
  @Inject(ProductService)
  private readonly _productService: ProductService;

  constructor(
    @InjectRepository(ProductImage)
    private _productImageRepository: Repository<ProductImage>,
  ) {}

  async create(createImageDto: any) {
    console.log(createImageDto)
    const newImage = {} as ProductImage;
    newImage.fileName = createImageDto.fileUrl;
    newImage.product = await this._productService.findOne(
      createImageDto.productId,
    );
    const dataOB = this._productImageRepository.create(newImage);
    return await this._productImageRepository.save(dataOB);
  }

  findAll() {
    return `This action returns all image`;
  }

  async findOne(id: number) {
    return await this._productImageRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateImageDto: any) {
    this.findOne(id).then((img) => {
      img.fileName = updateImageDto.fileName;
      this._productImageRepository.save(img);
    });
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
