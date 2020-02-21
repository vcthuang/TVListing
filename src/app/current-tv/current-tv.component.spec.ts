import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTvComponent } from './current-tv.component';
import { TvListingService } from '../tvlisting.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TvlistingFakeService } from '../tvlisting-fake.service';

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
      //instead of using tvlistingservice, use tvlistingFakeservice (key value pair)
      providers:[{provide: TvListingService, useClass: TvlistingFakeService}]
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

  // make sure the fake data from tvlisting-fake.service.ts is read
  it('should have TV Show Name 1: Girls', () => {
    expect(component.current[0].name).toBe('Girls');
  });

  it('should have TV Show Name 2: Good Girls', () => {
    expect(component.current[1].name).toBe('Good Girls');
  });

  it('should have runtime 1: 30 minutes', () => {
    expect(component.current[0].runtime).toBe(30);
  });

  it('should have runtime 2: 60 minutes', () => {
    expect(component.current[1].runtime).toBe(60);
  });

});
