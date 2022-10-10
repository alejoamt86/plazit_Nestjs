import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { LargeNumberLike } from 'crypto';
import { response } from 'express';
import { CreateProductDto, UpdateProductDto } from 'src/products.dtos';
import { ProductsService } from 'src/services/products.service';
import { ParseIntPipe } from '../common/parse-int.pipe';
 
@Controller('products')
export class ProductsController {

    constructor(private  productService: ProductsService) {}
    // http://localhost:3000/new
    @Get('new')
    getNewEndpoint(): string {
        return 'hola yo soy un nuevo endpoint';
    }


    // http://localho sst:3000/products?limit=12&offset=122
    // http://localhosvit:3000/products?offset=122
    @Get()
    getProductsQuery(@Query('limit') limit = 100, @Query('offset') offset: number) {
        // return `The product limit: ${limit} offset:${offset}`;
        return this.productService.findAll();
    }

    // http://localhost:3000/products/id
    @Get(':productId')
    getOne(@Param('productId', ParseIntPipe) productId: number){
        // return `The product is: ${productId}`;
        return this.productService.findOne(productId);
    }


    @Post()
    @HttpCode(HttpStatus.ACCEPTED)
    create(@Body() payload: CreateProductDto) {
        // return { message: 'accion de crear', payload };
        return this.productService.create(payload);
    }

    @Put(':id')
    update(@Param('id') productId: number, @Body() payload: UpdateProductDto) {
        return this.productService.update(+productId,payload);
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
        return this.productService.remove(+id);
    }

    @Delete()
    delecteMax(@Body() payload: any) {
        return { messge: 'Accion de eliminar maxivamente', payload }
    }


}
