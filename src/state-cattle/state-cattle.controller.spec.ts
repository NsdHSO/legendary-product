import { Test, TestingModule } from '@nestjs/testing';
import { StateCattleController } from './state-cattle.controller';
import { StateCattleService } from './state-cattle.service';

describe('StateCattleController', () => {
  let controller: StateCattleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StateCattleController],
      providers: [StateCattleService],
    }).compile();

    controller = module.get<StateCattleController>(StateCattleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
