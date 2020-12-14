import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  mydata;

  constructor(private courseService:CourseService) { }

  @Output() myoutput = new EventEmitter<number>();

  ngOnInit() {
    this.courseService.getEmployees().subscribe(item => {
      this.mydata = item;
    })
  }

  onClick(id) {
    this.myoutput.emit(id);
  }

}
