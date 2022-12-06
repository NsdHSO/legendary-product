import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateCattle } from './entities/state-cattle.entity';
import { StateCattleController } from './state-cattle.controller';
import { StateCattleService } from './state-cattle.service';

@Module({
  imports: [TypeOrmModule.forFeature([StateCattle])],
  controllers: [StateCattleController],
  providers: [StateCattleService],
})
export class StateCattleModule {}
