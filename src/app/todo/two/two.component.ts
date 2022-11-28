import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../course.service';

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  myform!:FormGroup;

  mydata:any[] = [];

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.myform = new FormGroup({
      food: new FormControl(null)
    })
  }

  handlesubmit = () => {
    this.courseService.getfire().subscribe((object:Record<any,any>) => {
      for(let key in object) {
        this.mydata.push(object[key]);
      }
    })
  }

  onClick() {
    this.courseService.senddata(this.myform.value.food).subscribe(() => console.log("sent"));

    setTimeout(() => {

      this.handlesubmit();
      this.mydata = [];
      
    }, 1000);

  }

}
