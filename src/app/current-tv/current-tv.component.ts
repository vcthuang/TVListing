import { Component, OnInit } from '@angular/core';
import { ICurrentTV } from '../icurrent-tv';
import { TvListingService } from '../tvlisting.service';

@Component({
  selector: 'app-current-tv',
  templateUrl: './current-tv.component.html',
  styleUrls: ['./current-tv.component.css']
})
export class CurrentTvComponent implements OnInit {
  current:  ICurrentTV
  // create an instance of service
  constructor(private tvlistingService: TvListingService) { 
    this.current = {
      name: 'Girls',
      rating: 6.9,
      runtime: 30,
      network: 'HBO',
      time: '22:00',
      days: 'Monday',
      image: 'http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg',
      officicalSite: 'http://www.hbo.com/girls',
      summary: 'This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.'
    } as ICurrentTV
  }

  ngOnInit(): void {
    // arrow function => writing function within a function 
    // writing this way to make sure data is stayed up to date
    this.tvlistingService.getCurrentTVListing('Survivor').subscribe(data => this.current = data);
  }

}
