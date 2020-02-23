import { Component } from '@angular/core';
import { TvListingService } from './tvlisting.service';
import { ICurrentTV, ItvListing } from './icurrent-tv';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TvListingApp';

  // declare a variable, must be the same as shown on .html
  currentTVShows: ItvListing;

  // write constructor to inject tvlisting service
  constructor (private tvlistingService: TvListingService){}

  doSearch(searchValue) {
    // arrow function => writing function within a function 
    // writing this way to make sure data is stayed up to date
    this.tvlistingService.getCurrentTVListing(searchValue).subscribe(data => this.currentTVShows = data);
  }

}
