import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sept12';


  mydata;

  constructor(private courseService:CourseService) {}

  ngOnInit() {

  }

  onClick(test) {
    console.log(test);
  }
}
