import { Component } from '@angular/core';
import { CourseService } from './todo/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mydata:any;

  constructor(private courseService:CourseService) {}

  getdata2(test:any) {
    console.log(this.mydata);
    console.log("test app component");
    this.courseService.getperson(test).subscribe(item => this.mydata = item);
  }

  changecolor(test:any) {
    console.log(test);
  }
}
