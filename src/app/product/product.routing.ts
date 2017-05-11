import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ProductListComponent } from "./product-list.component";
import { ProductHomeComponent } from "./product-home.component";
import { ProductEditComponent } from "./product-edit.component";
import { CanEditGuard } from "./can-edit.guard";
import { SaveAlertGuard } from "./save-alert.guard";

const product_routes: Routes = [
    { path: 'products', component: ProductHomeComponent, children: [
        { path: 'list', component: ProductListComponent }, 
        { path: 'edit/:id', 
            component: ProductEditComponent,
            canActivate: [CanEditGuard],
            canDeactivate: [SaveAlertGuard]
         }, 
        { path: 'create', component: ProductEditComponent }, 

    ] },
   
];

//does not include location service
export const product_routing: ModuleWithProviders = RouterModule.forChild(product_routes);
export const components = [
    ProductHomeComponent,
    ProductEditComponent,
    ProductListComponent
];