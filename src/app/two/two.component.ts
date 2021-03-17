import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../course.service';

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  mygroup:FormGroup;

  mike = [];

  constructor(private courseService:CourseService) { }

  getdata() {
    this.mike = [];
    this.courseService.getFire().subscribe(object => {
      for(let key in object) {
        this.mike.push(object[key]);
      }
    })
  }

  ngOnInit() {
    this.mygroup = new FormGroup({
      food: new FormControl(null)
    });
    this.getdata();
  }

  onClick() {
    this.courseService.sendData(this.mygroup.value.food).subscribe(() => console.log("sent"));
    this.getdata();


  }

}
