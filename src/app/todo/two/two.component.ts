import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  myroute:any;
  mydata:any;


  constructor(private courseService:CourseService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(item => this.myroute = item["id"]);
    this.courseService.getperson(this.myroute).subscribe(item => this.mydata = item);
  }

}
