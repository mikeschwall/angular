import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit,AfterContentInit {

  mydata = "BEFORE VIEW INIT";
  @ContentChild("mike") mike!:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.mike.nativeElement.innerHTML="AFTER CONTENT CHILD YAY";
  }

}
