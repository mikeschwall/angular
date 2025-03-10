import { Component } from '@angular/core';
import { CoursesService, Employee } from './todo/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mydata?:Employee;

  constructor(private courseService:CoursesService) {}

  getdata(test:number) {
    this.courseService.getEmployee(test).subscribe(item => this.mydata = item);
  }

  final(test:boolean) {
    console.log(test);
  }


}
