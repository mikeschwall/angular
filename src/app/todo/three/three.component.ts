import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit, AfterContentInit {

  mydata="before view child";

  @ContentChild("marker") marker!:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.marker.nativeElement.innerHTML="AFTER CONTENT CHILD"
  }

}
