import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CourseService } from './course.service';
import { ThreeComponent } from './three/three.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'sept12';

@ViewChild(ThreeComponent) three:ThreeComponent;

mydata = "before content chikld";

  constructor(private courseService:CourseService) {}

  ngAfterViewInit() {
    this.three.mydata = "AFTER VIEW CHILD";
  }
}
