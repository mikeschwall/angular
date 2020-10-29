import { Component, OnInit, AfterContentInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit, AfterContentInit {

  mydata = "view child before";
  @ContentChild("mike") mike:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.mike.nativeElement.innerHTML = "AFGTER CONTENT INIT";
  }

}
