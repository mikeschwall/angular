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

  getdata(id:number) {
    this.courseService.getperson(id).subscribe(item => this.mydata = item);
  }

  mike(test:any) {
    console.log(test);
  }
  
}
