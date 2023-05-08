import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../course.service';

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  mygroup!:FormGroup;

  myarray:any[] = [];

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.mygroup = new FormGroup({
      food: new FormControl(null)
    })
  }

  handleform = () => {
    this.courseService.getfire().subscribe((object:Record<any,any>) => {
      for(let key in object) {
        this.myarray.push(object[key]);
      }
    })
  }

  onClick() {
    this.courseService.senddata(this.mygroup.value.food).subscribe(() => console.log("sent"))
    setTimeout(() => {
      this.myarray = [];
      this.handleform();
    },1000);

  }


}
