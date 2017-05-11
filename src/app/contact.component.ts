import { IContactService } from './core/interfaces';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Address } from "./core/models";

@Component({
    moduleId: module.id,
    selector: 'contact',
    templateUrl: 'contact.component.html',
    //providers: [ContactService]
})

export class ContactComponent implements OnInit {
    @ViewChild('cityName')
    cityName: ElementRef; 

    branches: any [] = [];

    //obj is created = view is not render to the browser
    constructor(private contactService : IContactService) { 
        console.log("contact component created");
        
    }

    //lifecycle - template is rendered
    ngOnInit() { 
        this.cityName.nativeElement.focus();
        this.branches = this.contactService.getBranches();
    }

    addCity(){
        this.contactService.addBranch(new Address(this.cityName.nativeElement.value));
    }


}