import { TestBed } from '@angular/core/testing';

import { TvlistingFakeService } from './tvlisting-fake.service';

describe('TvlistingFakeService', () => {
  let service: TvlistingFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvlistingFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
