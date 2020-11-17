import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ThreeComponent } from './three/three.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(ThreeComponent) three:ThreeComponent;
  mydata = "before content child";

  constructor() {

  }

  ngAfterViewInit() {
    this.three.mydata = "AFTER VIEW CHILD";
  }
}
