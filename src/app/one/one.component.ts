import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CourseService } from '../course.service';
import { Employee } from '../course.model';

@Component({
  selector: 'one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  mydata;

  @Output() myoutput = new EventEmitter<number>();

  constructor(private courseService:CourseService) { }

  ngOnInit() {
    this.courseService.getData().subscribe((item) => {
      this.mydata = item
    })
  }

  onClick(id) {
    this.myoutput.emit(id);
  }

}
