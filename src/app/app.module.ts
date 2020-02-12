import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentTvComponent } from './current-tv/current-tv.component';
import { TvListingService } from './tvlisting.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  // register components
  declarations: [
    AppComponent,
    CurrentTvComponent
  ],
  // register external libraries
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  // register services
  providers: [
    TvListingService
  ],
  // AppComponent is being bootstraped so it will get going.  This is how app.moudle calls appComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
