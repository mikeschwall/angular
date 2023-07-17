import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { AlertComponent } from './alert/alert.component';
import { InitComponent } from './init/init.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { PlaceholderDirecive } from './placeholder.directive';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursePipe } from './course.pipe';


@NgModule({
  declarations: [
    AlertComponent,
    InitComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    PlaceholderDirecive,
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
