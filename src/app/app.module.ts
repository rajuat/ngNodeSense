import { HttpModule } from '@angular/http';
import { ProductModule } from './product/product.module';
import { IContactService } from './core/interfaces';

import { ContactService } from './contact.service';
import { ContactComponent } from './contact.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { AppComponent } from "./app.component";
import { LikesComponent } from "./likes.component";
import { routing } from "./app.routing";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ProductListComponent } from "./product/product-list.component";
import * as config from './app.config';
import { HighlightDirective } from "./highlight.directive";

@NgModule({
    imports: [
        BrowserModule,       
        FormsModule,
        routing,
        ProductModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        LikesComponent,
        HighlightDirective
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        {
            provide: IContactService,
            useClass: ContactService
        },
        {
            provide: "apiEndPoint",
            useValue: config.API_END_POINT
        },
        // {
        //     provide: LocationStrategy,
        //     useClass: HashLocationStrategy
        // }
    ]
})

export class AppModule {

}