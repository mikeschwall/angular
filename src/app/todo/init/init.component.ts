import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';
import { PlaceholderDirective } from '../placeholder.directive';

@Component({
  selector: 'init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  @ViewChild(PlaceholderDirective) ph!:PlaceholderDirective;

  constructor(private componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  onClick() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const position = this.ph.viewContainerRef;
    position.createComponent(factory);
  }

}
