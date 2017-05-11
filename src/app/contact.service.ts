import { IContactService } from './core/interfaces';
import { Injectable } from '@angular/core';
import { Address } from "./core/models";

@Injectable()
export class ContactService implements IContactService {

    branches : Address [] = [
        new Address("BLR")        
    ];

    constructor() { 
         console.log("contact service created");
    }

    getBranches(): Array<Address> {
        return this.branches;
    }

    addBranch(branch: Address): void {
        this.branches.push(branch);
    }

}

