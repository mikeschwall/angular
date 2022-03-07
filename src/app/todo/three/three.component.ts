import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit,AfterContentInit {

  mydata = "view child before";

  @ContentChild("mike") mike!:ElementRef;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterContentInit(): void {
    this.mike.nativeElement.innerText="AFTER CONTENT INIT"
  }

}
