import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {PomodoroTimerComponent} from './ticktac.component';
import {FormsModule} from '@angular/forms'
@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ PomodoroTimerComponent],
  bootstrap:    [ PomodoroTimerComponent ],
})
export class AppModule { }
