import { Router } from '@angular/router';
import { Product } from './../core/models';
import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from "./product.service";
import { NgForm } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: 'product-edit.component.html'
})

export class ProductEditComponent implements OnInit {
    product: Product = new Product();
    brands: any[] = [];
    loading: boolean =  false;
    @ViewChild('productForm') form: NgForm;

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,
        private router: Router
        ) { }

    ngOnInit() { 
        let id :any;

        this.form.valueChanges.subscribe(
            (data: any) => {
                console.log(data);                
            }
        );

        this.route.params.subscribe(
            (params: Params) => {
                id = params['id'];
                if(id!=null){
                    // //edit
                    // this.productService.getProduct(id).then(
                    //     (product: Product) => {
                    //         this.product = product;
                    //     }
                    // );
                    //this.productService.getBrands.then(
                    //     (brands: any[]) => {
                    //         this.brands = brands;
                    //     }
                    // );

                    this.loading = true;

                    Promise.all([
                        this.productService.getProduct(id),
                        this.productService.getBrands()
                    ]).then(
                        (results: any[]) => {
                            this.product = results[0];
                            this.brands = results[1];

                            this.loading = false;                            
                        }
                    ).catch(
                        (error: any) => {
                            console.log(" promise error " + error);
                            this.loading = false;
                        }
                    );
                } else {
                    //create
                }
               
            }
        );
    }

    saveProduct(event: Event){
        //stop browser to post data directly for some browser
        event.preventDefault();
        this.productService.saveProduct(this.product).then(
            (savedProduct: Product) => {
                this.router.navigate(['/products/list']);
            }
        );
    }
}