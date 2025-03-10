import { Component, OnInit } from '@angular/core';
import { CoursesService, Employee } from '../course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  mydata:any;
  mydata2?:Employee;

  constructor(private courseService:CoursesService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(item => this.mydata = item["id"]);
    this.courseService.getEmployee(this.mydata).subscribe(item => this.mydata2 = item);
  }

}
