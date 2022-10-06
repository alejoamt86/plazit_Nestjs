import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
 
  // http://localhost:3000
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // http://localhost:3000/new
  @Get('new')
  getNewEndpoint():string{
    return 'hola yo soy un nuevo endpoint';
  }
}
