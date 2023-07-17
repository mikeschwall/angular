import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector:"[placeholder]"
})
export class PlaceholderDirecive {
    constructor(public viewContainerRef:ViewContainerRef) {}
}