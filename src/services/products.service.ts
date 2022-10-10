import { Injectable } from '@nestjs/common';
import { Product } from 'entities/product.entity';

@Injectable()
export class ProductsService {
    private counterId = 1;
    
    products: Product[] = [
        { id: 1, name: 'fab', description: 'bla', price: 120, stock: 12, image: '' }
    ];


    findAll() {
        return this.products;
    }

    findOne(id: number) {
        return this.products.find((item) => item.id === id);
    }
   
    create(payload: any){
        this.counterId ++; 
        const newProduct = {
            id:this.counterId,
            ...payload,
        }
        this.products.push(newProduct);
        return newProduct;
    }

    update(id: number, payload: any){
        const product = this.findOne(id);
        if(product){
            const index = this.products.findIndex((item) => item.id === +id);            
            this.products[index]= {
                ...product,
                ...payload
            };
            return this.products[index];
        }
        console.log('retorno un nulo');
        return null;
    }
}
