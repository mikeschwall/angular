import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CourseService, Employee } from './todo/foodservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  employee!:Employee;

  constructor(private courseService:CourseService) {}

  ngOnInit(): void {

  }

  getdata(id:number) {
    this.courseService.getemployee(id).subscribe(item => this.employee = item);
  }

  final(output:boolean) {
    console.log(output);
  }
  
}
