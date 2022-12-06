import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StateCattleService } from './state-cattle.service';
import { CreateStateCattleDto } from './dto/create-state-cattle.dto';
import { UpdateStateCattleDto } from './dto/update-state-cattle.dto';

@Controller('state-cattle')
export class StateCattleController {
  constructor(private readonly stateCattleService: StateCattleService) {}

  @Post()
  create(@Body() createStateCattleDto: CreateStateCattleDto) {
    return this.stateCattleService.create(createStateCattleDto);
  }

  @Get()
  findAll() {
    return this.stateCattleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stateCattleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStateCattleDto: UpdateStateCattleDto) {
    return this.stateCattleService.update(+id, updateStateCattleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stateCattleService.remove(+id);
  }
}
