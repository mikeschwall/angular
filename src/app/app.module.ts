import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InitComponent } from './init/init.component';
import { AlertComponent } from './alert/alert.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { PlaceholderDirective } from './placeholder.directive';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CourseService } from './course.service';
import { CoursePipe } from './course.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    AlertComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    PlaceholderDirective,
    CoursePipe
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
