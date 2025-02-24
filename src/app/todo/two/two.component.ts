import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  mydata:any;
  mydata2:any;

  constructor(private courseService:CourseService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(item => this.mydata = item["id"]);
    console.log(this.mydata)
    this.courseService.getperson(this.mydata).subscribe(item => this.mydata2 = item);
  }

}
