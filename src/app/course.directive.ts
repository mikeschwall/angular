import {Directive,Renderer2,ElementRef} from '@angular/core';

@Directive({
    selector:"[autogrow]",
    host:{
        "(focus)":"onFocus()",
        "(blur)":"onBlur()"
    }
})

export class CourseDirective {
    constructor(private renderer:Renderer2, private el:ElementRef) {

    }

    onFocus() {
        return this.renderer.setStyle(this.el.nativeElement,'width','900px');
    }

    onBlur() {
        return this.renderer.setStyle(this.el.nativeElement,'width','100px');
    }
}