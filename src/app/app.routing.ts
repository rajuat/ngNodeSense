import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },

];

//ROuterModule. for root creates dynamic module based on route conf
//forroot creates service like ;location service, inclused directibes like rout outlet, routerlink
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: false});
