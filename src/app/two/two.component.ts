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

    this.courseService.getFire().subscribe(object => {
      for (let key in object) {
        this.mydata.push(object[key]);
      }
    })

  }

  onClick() {
    this.courseService.senddata(this.mygroup.value.food).subscribe(() => console.log("sent"));
  }

}
