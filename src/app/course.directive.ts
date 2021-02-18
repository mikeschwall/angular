import {Directive,Renderer2,ElementRef} from '@angular/core';

@Directive({
    selector:"[autogrow]",
    host:{
        "(focus)":"onFocus()",
        "(blur)":"onBlur()"
    }
})

export class CourseDirective {
    constructor(private el:ElementRef,private renderer:Renderer2){}

    onFocus() {
        this.renderer.setStyle(this.el.nativeElement,'width','900px');
    }

    onBlur() {
        this.renderer.setStyle(this.el.nativeElement,'width','100px');
    }
}