import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { IcurrentTVData } from './icurrent-tvdata';
import { ItvListingData } from  './icurrent-tvdata';
import { environment } from 'src/environments/environment';
import { ICurrentTV } from './icurrent-tv';
import { ItvListing } from './icurrent-tv';
import { Observable } from 'rxjs';  // reactive transformations
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TvListingService {
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
    
    // set up temporary variable to validate data, make sure it's not null
    // in typescript, it's one variable at a time.
    var tempName: string;
    var tempNetwork: string;
    var tempTime: string;
    var tempImage: string;
    var tempOfficialSite: string;
    var tempSummary: string;
    var tempRuntime: number;
    var tempDays: string[];

    //var tvListing: ICurrentTV;
    // declare tvListing to house array of ICurrentTV data
    var tvListing: ICurrentTV[] = new Array(data.length);
    
    for (var i = 0; i < data.length; i++) {
      // make sure data is not null
      console.log ('arrary: ', i);
      if (data[i].show.name) {
        tempName = data[i].show.name;
      } else {
        // should never ever happen as we do serach on name
        tempName = 'Unknown';
      }
      console.log ('tempName: ', tempName);

      if (data[i].show.runtime) {
        tempRuntime = data[i].show.runtime;
      } else {
        tempRuntime = null;
      }
      console.log ('tempRuntime: ', tempRuntime);

      // there could be no network at all and to pull network.name will cause error
      if (data[i].show.network) {
          if (data[i].show.network.name) {
            tempNetwork = data[i].show.network.name;
          } else {
            tempNetwork = 'Show not available at this time';    
          }
      } else {
        tempNetwork = 'Show not available at this time';
      }
      console.log ('tempNetwork: ', tempNetwork);
      
      if (data[i].show.schedule.time) {
        tempTime = data[i].show.schedule.time;
      } else {
        tempTime = null;
      }
      console.log ('tempTime: ', tempTime);

      if (data[i].show.schedule.days) {
        if (data[i].show.schedule.days.length == 0) {
          tempDays = null;
        } else {
          tempDays = data[i].show.schedule.days;
        }
      } else {
        //tempDays = [''];
        tempDays = null;
      }
      console.log ('tempDays: ', tempDays);

      // there could be no image at all
      if (data[i].show.image) {
        if (data[i].show.image.medium) {
          tempImage = data[i].show.image.medium;
        } else {
          tempImage = '';  
        }
      } else {
        tempImage = '';
      }
      console.log ('tempImage: ', tempImage);

      if (data[i].show.officialSite) {
        tempOfficialSite = data[i].show.officialSite;
      } else {
        tempOfficialSite = null;
      }
      console.log ('tempOfficialSite: ', tempOfficialSite);

      if (data[i].show.summary) {
        tempSummary = data[i].show.summary;
      } else {
        tempSummary = null;
      }
      console.log ('tempSummary: ', tempSummary);

      // Now data are all checked, they could be inserted without breaking
      tvListing[i] = {
        name: tempName,
        runtime : tempRuntime,
        network : tempNetwork,
        time : tempTime,
        days : tempDays,
        image : tempImage,
        officicalSite : tempOfficialSite,
        summary : tempSummary
      }
    }

    console.log (tvListing);
    
    return tvListing;
  }
}
