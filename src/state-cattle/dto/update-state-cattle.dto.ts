import { PartialType } from '@nestjs/mapped-types';
import { CreateStateCattleDto } from './create-state-cattle.dto';

export class UpdateStateCattleDto extends PartialType(CreateStateCattleDto) {}
