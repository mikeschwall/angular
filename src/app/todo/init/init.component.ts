import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  mydata:any;

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.courseService.getData().subscribe(item => {
      this.mydata = item;
    })
  }

}
