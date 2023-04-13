import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller()
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}
  @Get('update')
  update(): boolean {
    return this.databaseService.update();
  }
}