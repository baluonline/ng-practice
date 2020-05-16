import { OnInit, Directive, ElementRef, Renderer2, HostBinding, Input, HostListener
} from '@angular/core';

@Directive({
    selector:'[appBetterHighlight]'
})

export class BetterHighlighter implements OnInit {
    @Input() defaultColor: string="blue";
    @Input('appBetterHighlight') highlightColor: string ="green"
    @HostBinding('style.backgroundColor') backgroundColor: string;

    constructor(private renderer: Renderer2, private elRef: ElementRef) {}

    ngOnInit(){
        this.backgroundColor=this.defaultColor
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
    }

    @HostListener('mouseenter') mouseover(eventData:Event){
        this.backgroundColor=this.highlightColor;
    }
    
    @HostListener('mouseleave') mouseleave(eventData:Event){
        this.backgroundColor="yellow"
    }
}

