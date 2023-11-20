import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';
import { CourseService } from '../course.service';
import { PlaceholderDirective } from '../placeholder.directive';

@Component({
  selector: 'one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  mydata:any;

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.courseService.getdata().subscribe(item => this.mydata = item);
  }

  

}
