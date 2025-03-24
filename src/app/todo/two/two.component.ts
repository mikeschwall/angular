import { Component, OnInit } from '@angular/core';
import { CourseService, Employee } from '../foodservice';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  path!:any;
  employee!:Employee;

  constructor(private route:ActivatedRoute, private courseService:CourseService) { }

  ngOnInit(): void {
    this.route.params.subscribe(item => this.path = item["id"]);
    console.log(this.path)
    this.courseService.getemployee(this.path).subscribe(item => this.employee = item);
  }

}
