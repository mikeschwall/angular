import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { PlaceholderDirective } from '../placeholder.directive';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }


}
