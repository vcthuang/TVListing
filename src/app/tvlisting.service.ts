import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IcurrentTVData } from './icurrent-tvdata';
import { environment } from 'src/environments/environment';
import { ICurrentTV } from './icurrent-tv';
import { Observable } from 'rxjs';  // reactive transformations
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TvListingService {
  // using private keyword makes httpClient private to the class hence usable anywhere in the class
  constructor(private httpClient: HttpClient) { }

  getCurrentTVListing(name: string) : 
  Observable<ICurrentTV> {
    return this.httpClient.get<IcurrentTVData>(
      // need place holder `` and also string inference ${}
      // pipe transfor values from one to another
      // use map to make return observable
      `${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${name}`
    ).pipe(map(data => this.transformToICurrentTV(data)));
  }

  private transformToICurrentTV (data: IcurrentTVData): ICurrentTV {
    return {
      name: data.name,
      rating: data.rating,
      runtime: data.runtime,
      network: data.network.name,
      time: data.schedule.time,
      days: data.schedule.days[0],
      image: data.image.medium,
      officicalSite: data.officialSite,
      summary: data.summary
    }
  }
}
