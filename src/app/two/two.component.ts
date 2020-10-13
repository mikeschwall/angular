import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  mydata;

  myform:FormGroup;

  mike = [];

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

    this.courseService.getFire().subscribe(obj => {
      for(let key in obj) {
        this.mike.push(obj[key]);
      }
    })
  }

}
