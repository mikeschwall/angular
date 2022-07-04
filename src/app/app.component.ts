import { Component } from '@angular/core';
import { CourseService } from './todo/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private courseService:CourseService) {}

  mydata:any;

  onClick(test:any) {
    this.courseService.getPerson(test).subscribe(item => {
      this.mydata = item;
    })
  }

  getData(test:any) {
    console.log(test);
  }
}
