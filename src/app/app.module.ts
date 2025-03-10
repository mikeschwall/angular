import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes  =[];


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
