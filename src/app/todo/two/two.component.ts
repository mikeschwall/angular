import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CourseService } from '../course.service';

@Component({
  selector: 'two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  mydata:any;
  mike:any[] = [];

  mygroup!:FormGroup;

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
    this.mygroup = new FormGroup({
      food: new FormControl(null)
    })
  }

  handledata = () => {
    this.courseService.getfire().subscribe((object:Record<any,any>) => {
        for (let key in object) {
          this.mike.push(object[key]);
        }
    })
  }

  onClick() {
    this.courseService.senddata(this.mygroup.value.food).subscribe(() => console.log("sent"));

    setTimeout(() => {
      this.mike = [];
      this.handledata();
    }, 200);

  }

}
