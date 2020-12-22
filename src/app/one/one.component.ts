import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CourseService } from '../course.service';

@Component({
  selector: 'one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  mydata;
  subscription:Subscription

  constructor(private courseSeervice:CourseService) { }

  ngOnInit() {

     this.subscription = this.courseSeervice.getdata().subscribe(item => {
        this.mydata = item
    })

  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }

}
