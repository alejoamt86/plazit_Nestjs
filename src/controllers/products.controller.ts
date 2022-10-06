import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    // http://localhost:3000/new
    @Get('new')
    getNewEndpoint(): string {
        return 'hola yo soy un nuevo endpoint';
    }

    // http://localhost:3000/products/id
    @Get(':id')
    getProducts(@Param('id') productId: string): string {
        return `The product is: ${productId}`;
    }

    // http://localhost:3000/products?limit=12&offset=122
    // http://localhost:3000/products?offset=122
    @Get('')
    getProductsQuery(@Query('limit') limit = 100, @Query('offset') offset: number) {
        return `The product limit: ${limit} offset:${offset}`;
    }

    @Post()
    create(@Body() payload:any) {
        return { message: 'accion de crear', 
        payload,
    error:false};
    }

}
