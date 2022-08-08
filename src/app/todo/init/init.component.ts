import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { PlaceholderDirective } from '../alert.directive';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  @ViewChild(PlaceholderDirective) ph!:PlaceholderDirective;

  constructor(private componentFactoryResover:ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  onClick() {
    const factory = this.componentFactoryResover.resolveComponentFactory(AlertComponent);
    const position = this.ph.viewContainerRef;
    position.createComponent(factory);
  }

}
