import { Observable } from 'rxjs';
import { ItvListing } from './icurrent-tv';

// definte a contract that tvlistingservice is required to have function getCurrentTVListing
// this interface will be used in real tvListingService and tvlistingFakeService
export interface ItvListingService {
  getCurrentTVListing(name: string) : Observable <ItvListing>
}
