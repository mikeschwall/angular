import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CoursesService } from '../course.service';

@Component({
  selector: 'one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  mydata:any;

  @Output() myoutput = new EventEmitter<number>();

  constructor(private courseService:CoursesService) { }

  ngOnInit(): void {
    this.courseService.getData().subscribe(item => this.mydata = item);
  }

  onClick(id:number) {
    this.myoutput.emit(id);
  }

}
