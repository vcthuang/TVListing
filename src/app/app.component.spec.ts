import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CurrentTvComponent } from './current-tv/current-tv.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      //added manually HttpClientTesting Module
      imports: [HttpClientTestingModule],
      declarations: [
        AppComponent,
        //added manually
        CurrentTvComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TvListingApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('TvListingApp');
  });

  /* not required
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('TvListingApp is running!');
  });
  */
 
});
