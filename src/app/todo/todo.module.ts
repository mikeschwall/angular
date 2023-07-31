import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { InitComponent } from './init/init.component';
import { AlertComponent } from './alert/alert.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlaceholderDirective } from './placeholder.directive';
import { CoursePipe } from './course.pipe';


@NgModule({
  declarations: [
    InitComponent,
    AlertComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    PlaceholderDirective,
    CoursePipe
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    InitComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent
  ]
})
export class TodoModule { }
