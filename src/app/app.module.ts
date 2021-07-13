import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { InitComponent } from './init/init.component';
import { OneComponent } from './one/one.component';
import { CourseService } from './course.service';
import { PlaceholderDirective } from './placeholder.directive';
import { HttpClientModule } from '@angular/common/http';
import { CoursePipe } from './course.pipe';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component'

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    InitComponent,
    OneComponent,
    PlaceholderDirective,
    CoursePipe,
    TwoComponent,
    ThreeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CourseService],
  entryComponents:[AlertComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
