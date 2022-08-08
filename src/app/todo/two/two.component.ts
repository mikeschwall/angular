import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CoursePipe } from '../course.pipe';
import { CourseService } from '../course.service';

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  mygroup!:FormGroup;

  mydata:any;
  mike:any[] = [];

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.mygroup = new FormGroup({
      food: new FormControl(null)
    })
  }

  handlesubmit = () => {
    this.courseService.getFire().subscribe((obj:Record<any,any>) => {
      console.log(obj);
      for(let key in obj) {
        this.mike.push(obj[key]);
      }
    })
  }

  onClick() {
    this.courseService.sendData(this.mygroup.value.food).subscribe(() => console.log("sent"))
    this.mike = [];
    setTimeout(() => {
      this.handlesubmit();
    },500);
  }

}
