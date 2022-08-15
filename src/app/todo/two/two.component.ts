import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  param:any;
  mydata:any;

  constructor(private courseService:CourseService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(item => this.param = item["id"]);

    this.courseService.getPerson(this.param).subscribe(item => {
      this.mydata = item
    })
  }

}
