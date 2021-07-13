import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

mydata;

  constructor(private courseService:CourseService) { }

  ngOnInit() {
    this.courseService.getData().subscribe(item => {
      this.mydata = item
    })
  }

}
