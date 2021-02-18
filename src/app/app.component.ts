import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ThreeComponent } from './three/three.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'sept12';
  @ViewChild(ThreeComponent) three:ThreeComponent;
  mydata = "content child before";
  ngAfterViewInit() {
    this.three.mydata = "VIEW CHILD AFTER";
  }

}
