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

  mydata;

  mydata2 = "before content child";

  @ViewChild(ThreeComponent) three:ThreeComponent;

  constructor(private courseService:CourseService) {}

  onClick(id) {
    this.courseService.getEmployee(id).subscribe(item => {
      this.mydata = item
    })
  }

  ngAfterViewInit() {
    this.three.mydata = "AFTER VIEW CHILD";
  }
}
