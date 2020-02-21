import { Injectable } from '@angular/core';
import { ItvListingService } from './itv-listing-service';
import { ItvListing } from './icurrent-tv';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TvlistingFakeService implements ItvListingService {
  
  // insert some data for testing
  private faketvlisting: ItvListing = [
    {
      name: 'Girls',
      runtime: 30,
      network: 'HBO',
      time: '22:00',
      days: ['Monday', 'Wednesday'],
      image: 'http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg',
      officicalSite: 'http://www.hbo.com/girls',
      summary: 'This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.'
    },
    {
      name: 'Good Girls',
      runtime: 60,
      network: 'NBC',
      time: '22:00',
      days: ['Sundays'],
      image: 'https://static.tvmaze.com/uploads/images/medium_portrait/235/589545.jpg',
      officicalSite: 'www.nbc.com',
      summary: ' Good Girls follows three "good girl" suburban wives and mothers who suddenly find themselves in desperate circumstances and decide to stop playing it safe, and risk everything to take their power back.'
    }
  ]
  
  constructor() { }

  public getCurrentTVListing(name: string) : Observable <ItvListing> {
    // make an observable _of_  imported from rxjs
    return of(this.faketvlisting);
  }
}
