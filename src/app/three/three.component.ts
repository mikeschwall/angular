import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit, AfterContentInit {

  mydata = "before view child init";
  @ContentChild("mike") mike:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.mike.nativeElement.innerHTML = "AFTER CONTENT INIT";
  }

}
