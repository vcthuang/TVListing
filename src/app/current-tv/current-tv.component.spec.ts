import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTvComponent } from './current-tv.component';

describe('CurrentTvComponent', () => {
  let component: CurrentTvComponent;
  let fixture: ComponentFixture<CurrentTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
