import { TestBed } from '@angular/core/testing';

import { TvListingService } from './tvlisting.service';

describe('TvListingService', () => {
  let service: TvListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
