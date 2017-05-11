import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'about',
    templateUrl: 'about.component.html'
})

export class AboutComponent implements OnInit {

    @Input() //databing from parent to child
    title: string = "About";

    @Input()    
    memberElement: any;

    members: string[];
    //two way binding with forms ngmodel
    member: string;

    a: number = 10;
    b: number = 20;

    constructor() { 
        this.members = ['Krish', "Venkat", "Venky"];
    }

    ngOnInit() { }
    
    show:boolean = true;

    showHide(e: Event) {
        this.show = !this.show;
        // return this.show;
        console.log("Show/hide", e);
    }

    addMember(value: any){
        this.members.push(value);

    }

    addMemberA(){
        console.log(this.memberElement);
        // const aa = this.memberElement.nativeElement.value;
        // this.members.push(aa);

    }

    add(){
        this.members.push(this.member);
    }
}