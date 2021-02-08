import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CourseService } from '../course.service';

@Component({
  selector: 'one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit,OnDestroy {

  mydata;
  mysubscription:Subscription;

  @Output() myoutput = new EventEmitter<number>();

  constructor(private courseService:CourseService) { }

  ngOnInit() {
   this.mysubscription = this.courseService.getEmployees().subscribe(item => {
      this.mydata = item
    })
  }

  ngOnDestroy() {
    this.mysubscription.unsubscribe();
  }

  onClick(id) {
    this.myoutput.emit(id);
  }


}
