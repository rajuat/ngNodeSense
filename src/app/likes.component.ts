import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'likes',
    template: `

        <h2>Likes : {{count}} </h2>

        <button (click)="increment()">+</button>
        <button (click)="decrement()">-</button>
    
    `
})

export class LikesComponent implements OnInit {
    @Input()
    count: number;

    @Output()
    countChange: EventEmitter<number> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    increment(){
        //this.count ++;
        this.countChange.emit(this.count + 1);
    }

    decrement(){
        //this.count --;
        this.countChange.emit(this.count - 1);
    }
}