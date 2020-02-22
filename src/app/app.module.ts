import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentTvComponent } from './current-tv/current-tv.component';
import { TvListingService } from './tvlisting.service';
import { HttpClientModule } from '@angular/common/http';
import { TvSearchComponent } from './tv-search/tv-search.component';

// manually added, we want all libraries in hammerjs
import 'hammerjs';
// read as: BrowserAnimationsModule within @angular/platform-browser/animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// manually import reactive forms for search box
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  // register components
  declarations: [
    AppComponent,
    CurrentTvComponent,
    TvSearchComponent
  ],
  // register external libraries
  imports: [
    BrowserModule,
    HttpClientModule,
    //manually added for styling & form control
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  // register services
  providers: [
    TvListingService
  ],
  // AppComponent is being bootstraped so it will get going.  This is how app.moudle calls appComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
