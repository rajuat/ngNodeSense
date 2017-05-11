export class Address {
    private _city: string;

    constructor(city: string){
        this._city = city;
    }

    get city() {
        return this._city;
    }

    set city(name: string) {
        this._city = name;
    }
}

export class Product {
    id: number;
    name: string;
    year: number;
    brandId: number;
    weight: string;
}