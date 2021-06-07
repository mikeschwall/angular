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
  mydata = [];

  constructor(private courseService:CourseService) { }

  ngOnInit() {
    this.mygroup = new FormGroup({
      food: new FormControl(null)
    })
  }

  onClick() {
    this.courseService.sendData(this.mygroup.value.food).subscribe(() => console.log("sent"));

    this.courseService.getFire().subscribe(object => {
      for(let key in object) {
        this.mydata.push(object[key]);
      }
    })
  }

}
