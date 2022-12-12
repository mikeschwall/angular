import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OneComponent } from './todo/one/one.component';
import { ThreeComponent } from './todo/three/three.component';
import { TodoModule } from './todo/todo.module';
import { TwoComponent } from './todo/two/two.component';

const routes:Routes = [
  {path:"",component:OneComponent},
  {path:"two/:id",component:TwoComponent},
  {path:"three",component:ThreeComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
