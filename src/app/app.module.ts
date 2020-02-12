import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentTvComponent } from './current-tv/current-tv.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentTvComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
