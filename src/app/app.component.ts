import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { ThreeComponent } from './three/three.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {
  title = 'sept12';

  mydata = "before content child";
  @ViewChild(ThreeComponent) three:ThreeComponent;

  ngOnInit() {

  }

  ngAfterContentInit (){

    this.three.mydata = "AFTER VIEW CHILD";

  }
}
