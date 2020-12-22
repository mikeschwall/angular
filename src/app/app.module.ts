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
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CoursePipe } from './course.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    InitComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    PlaceholderDirective,
    CoursePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent],
  entryComponents:[AlertComponent]
})
export class AppModule { }
