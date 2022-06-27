import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';
import { PlaceholderDirective } from '../placeholder.directive';

@Component({
  selector: 'one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  @ViewChild(PlaceholderDirective) ph!:PlaceholderDirective;

  constructor(private componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  onClick() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const position = this.ph.viewContainer;
    position.createComponent(factory);
  }

}
