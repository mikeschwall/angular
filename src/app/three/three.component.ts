import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  @Input() myinput = false;
  @Output() myoutput = new  EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onClick(test) {
    this.myinput = !this.myinput;
    this.myoutput.emit(this.myinput);
  }

}
