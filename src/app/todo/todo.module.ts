import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { InitComponent } from './init/init.component';
import { AlertComponent } from './alert/alert.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { PlaceholderDirective } from './init/placeholder.directive';


@NgModule({
  declarations: [
    InitComponent,
    AlertComponent,
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
