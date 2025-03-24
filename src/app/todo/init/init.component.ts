import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  constructor(private viewContainerRef:ViewContainerRef) { }

  ngOnInit(): void {
  }

  onClick() {
    this.viewContainerRef.createComponent(AlertComponent);
  }

}
