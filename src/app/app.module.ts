import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { InitComponent } from './init/init.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { PlaceholderDirective } from './placeholder.directive';
import { CourseService } from './course.service';
import { HttpClientModule } from '@angular/common/http';
import { CoursePipe } from './course.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseDirective } from './course.directive';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    InitComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    PlaceholderDirective,
    CoursePipe,
    CourseDirective
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
