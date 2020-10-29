import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { PlaceholderDirective } from '../placeholder.directive';
import {AlertComponent} from '../alert/alert.component';

@Component({
  selector: 'init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  @ViewChild(PlaceholderDirective) ph:PlaceholderDirective;

  constructor(private componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit() {
  }

  onClick() {

    const factory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const position = this.ph.viewContainerRef;

    position.createComponent(factory);

  }

}
