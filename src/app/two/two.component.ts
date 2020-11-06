import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  mydata;
  mydata2;

  constructor(private courseService:CourseService, private router:ActivatedRoute) { }

  ngOnInit() {

  this.router.params.subscribe(item => {
    this.mydata = item["id"]
  })

    this.courseService.getEmployee(this.mydata).subscribe(item => {
      this.mydata2 = item
    })
  }

}
