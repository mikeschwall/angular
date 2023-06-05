import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ThreeComponent } from './todo/three/three.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular';

  @ViewChild(ThreeComponent) three!:ThreeComponent;
  mydata2="before content child";

  ngAfterViewInit(): void {
    this.three.mydata="AFTER VIEW CHILD";
  }
}
