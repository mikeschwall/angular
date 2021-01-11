import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CourseService } from '../course.service';

@Component({
  selector: 'one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit, OnDestroy {

  mydata;
  mysubscription:Subscription;
  mygroup:FormGroup;

  constructor(private courseService:CourseService) { }

  ngOnInit() {
   this.mysubscription = this.courseService.getdata().subscribe(item => {
      this.mydata = item
    });

    this.mygroup = new FormGroup({
      food: new FormControl(null)
    })
  }

  ngOnDestroy() {
    this.mysubscription.unsubscribe();
  }  

}
