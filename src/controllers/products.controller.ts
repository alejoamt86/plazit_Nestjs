import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';

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
    @HttpCode(HttpStatus.ACCEPTED)
    create(@Body() payload: any) {
        return { message: 'accion de crear', payload };
    }

    @Put(':id')
    update(@Param('id') productId: number, @Body() payload: any) {
        return {
            message: 'accion de actualizar',
            productId,
            payload
        };
    }

    @Put('')
    updateMax(@Body() payload: any) {
        return {
            message: 'accion de actualizar',
            payload
        };
    }

    @Delete(':id')
    delecte(@Param('id') id: number) {
        return { messge: 'Accion de eliminar un solo elemento', id }
    }

    @Delete()
    delecteMax(@Body() payload: any) {
        return { messge: 'Accion de eliminar maxivamente', payload }
    }


}
