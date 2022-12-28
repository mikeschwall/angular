import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { AlertComponent } from './alert/alert.component';
import { InitComponent } from './init/init.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { PlaceholderDirective } from './placeholdeer.directive';


@NgModule({
  declarations: [
    AlertComponent,
    InitComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    PlaceholderDirective
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ],
  exports:[
    InitComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent
  ]
})
export class TodoModule { }
