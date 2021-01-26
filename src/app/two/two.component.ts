import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseService } from '../course.service';

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit,OnDestroy {

  mydata;
  mydata2;

  subscription:Subscription;

  constructor(private courseService:CourseService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(item => {
      this.mydata = item["id"]
    });

    this.subscription = this.courseService.getEmployee(this.mydata).subscribe(item => {
      this.mydata2 = item
    })
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  

}
