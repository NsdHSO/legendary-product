import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStateCattleDto } from './dto/create-state-cattle.dto';
import { UpdateStateCattleDto } from './dto/update-state-cattle.dto';
import { StateCattle } from './entities/state-cattle.entity';

@Injectable()
export class StateCattleService {
  constructor(
    @InjectRepository(StateCattle)
    private _stateCattleRepository: Repository<StateCattle>,
  ) {}

  create(createStateCattleDto: CreateStateCattleDto) {
    const cattleState = Object.assign({}, createStateCattleDto);
    const daoStateCattle = this._stateCattleRepository.create(cattleState);
    return this._stateCattleRepository.save(daoStateCattle);
  }

  findAll() {
    return this._stateCattleRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} stateCattle`;
  }

  update(id: number, updateStateCattleDto: UpdateStateCattleDto) {
    return `This action updates a #${id} stateCattle`;
  }

  remove(id: number) {
    return `This action removes a #${id} stateCattle`;
  }
}
