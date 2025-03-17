import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  mydata:any;

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.courseService.getdata().subscribe(item => this.mydata = item);
  }

}
