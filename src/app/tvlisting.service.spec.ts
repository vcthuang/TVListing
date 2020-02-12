import { TestBed } from '@angular/core/testing';

import { TvlistingService } from './tvlisting.service';

describe('TvlistingService', () => {
  let service: TvlistingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvlistingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
