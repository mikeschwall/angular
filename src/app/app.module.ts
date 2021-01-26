import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InitComponent } from './init/init.component';
import { AlertComponent } from './alert/alert.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { PlaceholderDirective } from './placeholder.directive';
import {Routes,RouterModule} from '@angular/router';
import { CourseService } from './course.service';

const routes:Routes = [
  {path:"", component:OneComponent},
  {path:"two/:id", component:TwoComponent},
  {path:"three", component: ThreeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    AlertComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CourseService],
  bootstrap: [AppComponent],
  entryComponents:[AlertComponent]
})
export class AppModule { }
