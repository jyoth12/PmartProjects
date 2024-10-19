import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvunitsComponent } from './tvunits.component';

describe('TvunitsComponent', () => {
  let component: TvunitsComponent;
  let fixture: ComponentFixture<TvunitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvunitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
