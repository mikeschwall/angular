import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CourseService } from '../course.service';

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  myform:FormGroup;
  mydata;
  mydata2 = [];

  constructor(private courseService:CourseService) { }

  ngOnInit() {
    this.myform = new FormGroup({
      food: new FormControl(null)
    })
  }

  onClick() {
    this.courseService.sendData(this.myform.value.food).subscribe(item => {
      console.log("sent");
    })

    this.courseService.getFire().subscribe(object => {
      for(let key in object) {
        this.mydata2.push(object[key]);
      }
    })

  }



}
