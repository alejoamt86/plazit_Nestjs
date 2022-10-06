import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

    // http://localhost:3000/categories/12/product/21
    @Get(':categoryId/product/:id')
    getCategoryProduct(@Param('categoryId') categoryId: string, @Param('id') productId: string): string {
        return `The category is: ${categoryId} and the product is ${productId}`;
    }

}
