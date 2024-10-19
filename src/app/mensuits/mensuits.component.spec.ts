import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensuitsComponent } from './mensuits.component';

describe('MensuitsComponent', () => {
  let component: MensuitsComponent;
  let fixture: ComponentFixture<MensuitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensuitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MensuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
