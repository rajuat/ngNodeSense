import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    showLikes : boolean = true;

    totalLikes: number = 0;
    totalPageLikes:  number = 1000;
    totalHomePageLikes:  number = 100;

    constructor() { }

    ngOnInit() { }

    onChangedCount(data: number){
        this.totalLikes = data;
    }
}