
import { FormsModule } from '@angular/forms';
import { ByYearPipe } from './product.pipes';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { product_routing, components } from './product.routing';
import { NgModule } from '@angular/core';

import { ProductService } from "./product.service";
import { CanEditGuard } from "./can-edit.guard";
import { SaveAlertGuard } from "./save-alert.guard";

@NgModule({
    imports: [
        product_routing, 
        HttpModule,
        CommonModule,
        FormsModule,
        ],
    exports: [],
    declarations: [
       components,        
        ByYearPipe],//anything seen in html
    providers: [ProductService, CanEditGuard, SaveAlertGuard],
})
export class ProductModule { }
