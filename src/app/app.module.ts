import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { AlertComponent } from './alert/alert.component';
import { InitComponent } from './init/init.component';
import { PlaceholderDirective } from './placeholder.directive';
import {HttpClientModule} from '@angular/common/http';
import { CourseService } from './course.service';
import { CoursePipe } from './course.pipe';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CourseDirective } from './course.directive';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    AlertComponent,
    InitComponent,
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
  bootstrap: [AppComponent],
  entryComponents:[AlertComponent]
})
export class AppModule { }
