import { Controller, Get, Param } from '@nestjs/common';
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

    // http://localhost:3000/products/id
    @Get('products/:id')
    getProducts(@Param('id') productId: string) :string{
      return `The product is: ${productId}`;
    }

    // http://localhost:3000/category/categoryId/products/id
    @Get('category/:categoryId/product/:id')
    getCategoryProduct(@Param('categoryId') categoryId: string, @Param('id') productId: string) :string{
      return `The category is: ${categoryId} and the product is ${productId}`;
    }
}
