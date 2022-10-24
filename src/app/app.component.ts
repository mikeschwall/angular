import { Component, OnInit } from '@angular/core';
import { CourseService } from './todo/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular';

  mydata:any;

  constructor(private courseService:CourseService) {

  }

  ngOnInit() {

  }

  getdata(test:any) {
    this.courseService.getperson(test).subscribe(item => {
      this.mydata = item
    })

  }

  onClick(test:any) {
    console.log(test);
  }

  
}
