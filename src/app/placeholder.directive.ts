import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
    selector:"[placeholder]"
})

export class PlaceholderDirective {
    constructor(public viewContainerRef:ViewContainerRef) {

    }
}