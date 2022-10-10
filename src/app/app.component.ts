import { Component } from '@angular/core';
import { CourseService } from './todo/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  mydata:any;

  constructor(private courseService:CourseService) {}

  getData(test:any) {
    this.courseService.getPerson(test).subscribe(item => this.mydata = item);
  }

  getdata(test:any) {
    console.log(test);
  }

}
