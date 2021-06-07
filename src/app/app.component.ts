import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ThreeComponent } from './three/three.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'sept12';

  mydata = "before content child";

  @ViewChild(ThreeComponent) three:ThreeComponent;

  ngAfterViewInit() {
    this.three.mydata = "AFTER VIEW CONTENT INIT";
  }
}
