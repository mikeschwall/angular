import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  constructor() { }

  @Input() myinput = false;
  @Output() myoutput = new  EventEmitter<boolean>();

  ngOnInit() {
  }

  onClick() {
    this.myinput = !this.myinput;
    this.myoutput.emit(this.myinput);
  }

}
