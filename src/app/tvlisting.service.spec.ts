import { TestBed } from '@angular/core/testing';
// manualy inserted this import
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { TvListingService } from './tvlisting.service';

describe('TvListingService', () => {
  let service: TvListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Manually added HttpClientTesting Module
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TvListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
