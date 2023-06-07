import { Test, TestingModule } from '@nestjs/testing';
import { RabbitCategoryController } from './rabbit-category.controller';
import { RabbitCategoryService } from './rabbit-category.service';

describe('RabbitCategoryController', () => {
  let controller: RabbitCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RabbitCategoryController],
      providers: [RabbitCategoryService],
    }).compile();

    controller = module.get<RabbitCategoryController>(RabbitCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
