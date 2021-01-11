import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../course.service';

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  mydata;
  mygroup:FormGroup;
  mike = [];

  constructor(private courseService:CourseService) { }

  ngOnInit() {
    this.mygroup = new FormGroup({
      food: new FormControl(null)
    })
  }

  onClick() {
    this.courseService.senddata(this.mygroup.value.food).subscribe(item => {
      console.log("sent");
    })

    this.courseService.getfire().subscribe(object => {
      for(let key in object) {
        this.mike.push(object[key]);
      }
    })
  }

}
