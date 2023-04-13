import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //add prefixo
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('sum')
  getSum(): number {
    return this.appService.getSum();
  }
}
