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
      
      // For show query
      `${environment.baseUrl}api.tvmaze.com/search/shows?q=${name}&appid=${environment.appID}`).pipe(map(data => this.transformToItvListing(data)));
  }

  private transformToItvListing (data: ItvListingData): ItvListing {
    // for testing only
    console.log ("hello world from transformToItvListing");
    console.log (data.length);
    console.log (data);
    
    // set up temporary variable to validate data, make sure it's not null
    var tempName, tempNetwork, tempTime, tempImage, tempOfficialSite, tempSummary: string;
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
        tempName = 'Unknown';
      }
      console.log ('tempName: ', tempName);

      if (data[i].show.runtime) {
        tempRuntime = data[i].show.runtime;
      } else {
        tempRuntime = 0;
      }
      console.log ('tempRuntime: ', tempRuntime);

      // there could be no network at all and to pull network.name will cause error
      if (data[i].show.network) {
          if (data[i].show.network.name) {
            tempNetwork = data[i].show.network.name;
          } else {
            tempNetwork = 'Unknown';    
          }
      } else {
        tempNetwork = 'Unknown';
      }
      console.log ('tempNetwork: ', tempNetwork);
      
      if (data[i].show.schedule.time) {
        tempTime = data[i].show.schedule.time;
      } else {
        tempTime = 'Unknown';
      }
      console.log ('tempTime: ', tempTime);

      if (data[i].show.schedule.days) {
        tempDays = data[i].show.schedule.days;
      } else {
        tempDays = ['Unknown'];
      }
      console.log ('tempDays: ', tempDays);

      // there could be no image at all
      if (data[i].show.image) {
        if (data[i].show.image.medium) {
          tempImage = data[i].show.image.medium;
        } else {
          tempImage = 'Unknown';  
        }
      } else {
        tempImage = 'Unknown';
      }
      console.log ('tempImage: ', tempImage);

      if (data[i].show.officialSite) {
        tempOfficialSite = data[i].show.officialSite;
      } else {
        tempOfficialSite = 'Unknown';
      }
      console.log ('tempOfficialSite: ', tempOfficialSite);

      if (data[i].show.summary) {
        tempSummary = data[i].show.summary;
      } else {
        tempSummary = 'Unknown';
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
