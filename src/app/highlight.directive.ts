import { ElementRef, 
        OnInit, 
        Directive, 
        Renderer,
        HostListener ,
        Input
    } from '@angular/core';

@Directive({ selector: '[highlight]' })
export class HighlightDirective implements OnInit{

    @Input('highlight') highlightColor: string = 'red';
    
    constructor(private hostElement: ElementRef,
                private renderer: Renderer) {
        
        console.log("directive created!!");
        
    }


    ngOnInit(): void {
        this.setColor("grey");
    }

    setColor (color: string) {
        this.renderer.setElementStyle(this.hostElement.nativeElement, 'background', color);
        this.renderer.setElementStyle(this.hostElement.nativeElement, 'color', "white");
    }

    @HostListener('mouseenter')
    mouseEnter(){
        this.setColor(this.highlightColor);
    }

    @HostListener('mouseleave')
    mouseLeave(){
       this.setColor("grey"); 
    }

}