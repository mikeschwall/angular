import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ThreeComponent } from './three/three.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'sept12';

  mydata = "before content init";

  @ViewChild(ThreeComponent) three:ThreeComponent;

  ngAfterViewInit() {
    this.three.mydata = "AFTER VIEW INIT";
  }
}
