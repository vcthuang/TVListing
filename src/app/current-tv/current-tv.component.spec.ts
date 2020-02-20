import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTvComponent } from './current-tv.component';
import { TvListingService } from '../tvlisting.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CurrentTvComponent', () => {
  let component: CurrentTvComponent;
  // create a virtual environment for testing
  let fixture: ComponentFixture<CurrentTvComponent>;

  // before each test, get the test bed ready
  // create a new thread for testing
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      //added manually [HttpClientTestingModule]
      imports: [HttpClientTestingModule],
      declarations: [ CurrentTvComponent ],
      //added manually [tvlistingservice]
      providers:[TvListingService]
    })
    .compileComponents();
  }));

  // Use the testbed to create component
  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // The actual test, make sure that the component is there
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
