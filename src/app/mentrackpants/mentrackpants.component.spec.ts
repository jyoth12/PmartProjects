import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentrackpantsComponent } from './mentrackpants.component';

describe('MentrackpantsComponent', () => {
  let component: MentrackpantsComponent;
  let fixture: ComponentFixture<MentrackpantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentrackpantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MentrackpantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
