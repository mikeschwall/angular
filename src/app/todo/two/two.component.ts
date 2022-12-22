import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../courseservice';

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  
  formGroup!:FormGroup;
  myfood:any[] = [];



  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      food: new FormControl(null)
    })
  }

  handleclick = () => {
    this.courseService.getfire().subscribe((object:Record<any,any>) => {
      for(let key in object) {
        this.myfood.push(object[key]);
      }
    })
  }

  onClick() {
    this.courseService.senddata(this.formGroup.value.food).subscribe(() => console.log("sent"));
    setTimeout(() => {
      this.myfood = [];
      this.handleclick();
    },1000);
  }

}
