import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  mydata:any;
  mydata2:any;

  constructor(private route:ActivatedRoute,private courseService:CourseService) { }

  ngOnInit(): void {
    this.route.params.subscribe(item => this.mydata = item["id"]);
    this.courseService.getperson(this.mydata).subscribe(item => this.mydata2 = item);
  }

}
