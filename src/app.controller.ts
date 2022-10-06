import { Controller, Get, Param, Query } from '@nestjs/common';
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
    @Get('product/:id')
    getProducts(@Param('id') productId: string) :string{
      return `The product is: ${productId}`;
    }

    // http://localhost:3000/category/categoryId/products/id
    @Get('category/:categoryId/product/:id')
    getCategoryProduct(@Param('categoryId') categoryId: string, @Param('id') productId: string) :string{
      return `The category is: ${categoryId} and the product is ${productId}`;
    }

     // http://localhost:3000/products?limit=12&offset=122
    // http://localhost:3000/products?offset=122

     @Get('products')
     getProductsQuery(@Query('limit') limit=100,@Query('offset') offset: number) {
       return `The product limit: ${limit} offset:${offset}`;
     }
}
