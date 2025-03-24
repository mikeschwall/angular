import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CourseService, Employee } from '../foodservice';

@Component({
  selector: 'one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  mydata:Employee[] = [];
  @Output() myoutput = new EventEmitter<number>();

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.courseService.getdata().subscribe(item => this.mydata = item);
  }

  onClick(id:number) {
    this.myoutput.emit(id);
  }

}
