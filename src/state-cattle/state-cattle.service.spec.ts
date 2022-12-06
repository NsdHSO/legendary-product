import { Test, TestingModule } from '@nestjs/testing';
import { StateCattleService } from './state-cattle.service';

describe('StateCattleService', () => {
  let service: StateCattleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StateCattleService],
    }).compile();

    service = module.get<StateCattleService>(StateCattleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
