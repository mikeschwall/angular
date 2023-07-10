import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector:"[placeholder]"
})
export class PlaceHolderDirective {
    constructor(public viewContainerRef:ViewContainerRef) {}
}