import { Product } from './../core/models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'byYear'
})

export class ByYearPipe implements PipeTransform {
    transform(products: any, year?: any): any {

        if(!products) return;
        if(!year) return products;

        return products.filter(
            (product: Product) => {
                 return product.year == year;
            }
        );
    }
}