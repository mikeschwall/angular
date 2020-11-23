import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../course.model';

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  mydata;
  mydata2;

  constructor(private courseService:CourseService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(item => {
      this.mydata = item["id"]
    })

  }

}
