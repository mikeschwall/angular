import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ThreeComponent } from './todo/three/three.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(ThreeComponent) three!:ThreeComponent;
  mydata = "before view child";
  
  ngAfterViewInit(): void {
    this.three.mydata = "AFTER VIEW CHILD";
  }

}
