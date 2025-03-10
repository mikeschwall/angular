import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  @Output() myoutput = new EventEmitter<boolean>();
  @Input() myinput = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.myinput = !this.myinput;
    this.myoutput.emit(this.myinput);
  }

}
