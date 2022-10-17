import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit,AfterContentInit {

  mydata = "before view child";

  @ContentChild("mike") mike!:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.mike.nativeElement.innerHTML="AFTER CONTENT INIT"
  }
  

}
