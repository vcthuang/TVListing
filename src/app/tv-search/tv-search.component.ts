import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TvListingService } from '../tvlisting.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-tv-search',
  templateUrl: './tv-search.component.html',
  styleUrls: ['./tv-search.component.css']
})
export class TvSearchComponent implements OnInit {
  // match with html FormControl name
  // make sure the minimum lengh is 2 before firing an event
  search = new FormControl('',[Validators.minLength(2)]);

  constructor(private tvListingService: TvListingService) { }

  ngOnInit(): void {
    this.search.valueChanges
      // wait for a second before firing for a service
      // search has to be valid (more than 3 characters)
      .pipe(debounceTime(1000))
      .subscribe(
      (searchValue: string)=> {
        if (!this.search.invalid && searchValue) {
          this.tvListingService.getCurrentTVListing(searchValue).subscribe (data => console.log(data));
        }
      })
  }
}
