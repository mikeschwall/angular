import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from './course.service';
import { ThreeComponent } from './three/three.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'sept12';

  mydata;

  mydata2 = "before content child";

  @ViewChild(ThreeComponent) three:ThreeComponent;

  constructor(private courseService:CourseService) {

  }

  ngAfterViewInit() {
    this.three.mydata = "AFTER VIEW CHILD";
  }

}
