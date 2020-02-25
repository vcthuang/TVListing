import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { IcurrentTVData } from './icurrent-tvdata';
import { ItvListingData } from  './icurrent-tvdata';
import { environment } from 'src/environments/environment';
import { ICurrentTV } from './icurrent-tv';
import { ItvListing } from './icurrent-tv';
import { Observable } from 'rxjs';  // reactive transformations
import { map } from 'rxjs/operators';
import { ItvListingService } from './itv-listing-service';

@Injectable({
  providedIn: 'root'
})
export class TvListingService implements ItvListingService {
  // using private keyword makes httpClient private to the class hence usable anywhere in the class
  constructor(private httpClient: HttpClient) { }

  getCurrentTVListing(name: string) : 
  Observable<ItvListing> {
    return this.httpClient.get<ItvListingData>(
      // need place holder `` and also string inference ${}
      // pipe transfor values from one to another
      // use map to make return observable
      
      /* For single search
       `${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${name}&appid=${environment.appID}`).pipe(map(data => this.transformToICurrentTV(data)));
      */
      
      // For show query, AppID is not required
      // `${environment.baseUrl}api.tvmaze.com/search/shows?q=${name}&appid=${environment.appID}`).pipe(map(data => this.transformToItvListing(data)));

      `${environment.baseUrl}api.tvmaze.com/search/shows?q=${name}`).pipe(map(data => this.transformToItvListing(data)));
  }

  private transformToItvListing (data: ItvListingData): ItvListing {
    // for testing only
    console.log ("hello world from transformToItvListing");
    console.log (data.length);
    console.log (data);
 
    // declare tvListing to house array of ICurrentTV data
    var tvListing: ICurrentTV[] = new Array(data.length);
    
    for (var i = 0; i < data.length; i++) {
      
      // make sure data exists so they could be inserted without breaking
      tvListing[i] = {
        name: data[i].show.name? data[i].show.name:null,
        runtime : data[i].show.runtime? data[i].show.runtime:null,
        network : data[i].show.network? data[i].show.network.name:null,
        time : data[i].show.schedule.time? data[i].show.schedule.time:null,
        days : (data[i].show.schedule.days.length != 0)? data[i].show.schedule.days:null,
        image : data[i].show.image? data[i].show.image.medium:null,
        officicalSite : data[i].show.officialSite? data[i].show.officialSite:null,
        summary : data[i].show.summary? data[i].show.summary:null
      }
    }

    console.log (tvListing);
    
    return tvListing;
  }
}
