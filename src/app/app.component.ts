import { Component, OnInit } from '@angular/core';
import { CourseService } from './todo/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mydata:any;

  constructor(private courseService:CourseService) {}

  ngOnInit(): void {

  }

  getdata(test:any) {
    this.courseService.getperson(test).subscribe(item => this.mydata = item)
  }

  final(test:any) {
    console.log(test);
  }

}
