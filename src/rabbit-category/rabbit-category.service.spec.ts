import { Test, TestingModule } from '@nestjs/testing';
import { RabbitCategoryService } from './rabbit-category.service';

describe('RabbitCategoryService', () => {
  let service: RabbitCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RabbitCategoryService],
    }).compile();

    service = module.get<RabbitCategoryService>(RabbitCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
