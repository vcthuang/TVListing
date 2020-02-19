import { Component, OnInit } from '@angular/core';
//import { ICurrentTV } from '../icurrent-tv';
import { ItvListing } from '../icurrent-tv';
import { TvListingService } from '../tvlisting.service';

@Component({
  selector: 'app-current-tv',
  templateUrl: './current-tv.component.html',
  styleUrls: ['./current-tv.component.css'],
})

export class CurrentTvComponent implements OnInit {
  current:  ItvListing
  // create an instance of service
  constructor(private tvlistingService: TvListingService) { 
      this.current = [
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
     ] as ItvListing
    }


  ngOnInit(): void {
    // arrow function => writing function within a function 
    // writing this way to make sure data is stayed up to date
    this.tvlistingService.getCurrentTVListing('The Flash').subscribe(data => this.current = data);
  }

}
