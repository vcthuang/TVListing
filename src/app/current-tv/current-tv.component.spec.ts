import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTvComponent } from './current-tv.component';

describe('CurrentTvComponent', () => {
  let component: CurrentTvComponent;
  // create a virtual environment for testing
  let fixture: ComponentFixture<CurrentTvComponent>;

  // before each test, get the test bed ready
  // create a new thread for testing
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentTvComponent ]
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
