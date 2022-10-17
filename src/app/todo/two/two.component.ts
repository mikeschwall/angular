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

  mike:any[] = [];

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.mygroup = new FormGroup({
      food: new FormControl(null)
    })
  }

  handleform = () => {
    this.courseService.getFire().subscribe((object:Record<any,any>) => {
      
      for(let key in object) {

        this.mike.push(object[key]);

      }
    })
  }

  onClick() {
    this.courseService.sendData(this.mygroup.value.food).subscribe(() => console.log(("sent")));
    this.mike = [];

    setTimeout(() => {
      this.handleform();
    },1000);
  }

}
