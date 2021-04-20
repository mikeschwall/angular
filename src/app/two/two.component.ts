import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  mydata;
  mydata2;

  constructor(private router:ActivatedRoute,private courseService:CourseService) { }

  ngOnInit() {
    this.router.params.subscribe(object => {
      this.mydata = object["id"]
    })

    this.courseService.getEmployee(this.mydata).subscribe(item => {
      this.mydata2 = item
    })
  }

}
