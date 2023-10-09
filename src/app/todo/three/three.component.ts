import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit,AfterContentInit {

  @ContentChild("mike") mike!:ElementRef;

  mydata = "before view child";

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.mike.nativeElement.innerHTML="AFTER CONTENT INIT"
  }

}
