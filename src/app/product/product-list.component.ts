import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { ProductService } from "./product.service";
import { Product } from "../core/models";

@Component({
    moduleId: module.id,//not all component needs a selector if itbis not inserted using html tag    
    templateUrl: 'product-list.component.html'
})

export class ProductListComponent implements OnInit {
    products: Product[];
    year: number;
    
    constructor(private productService: ProductService,
                private route:ActivatedRoute
    ) { }

    ngOnInit() { 

        //products/list;source=home (matrix url)
        const source = this.route.snapshot.params['source'];
        console.log(source);
        
        this.productService.getProducts().subscribe(
            (products: Product[]) => {
                this.products = products;
            }
        );

    }
}