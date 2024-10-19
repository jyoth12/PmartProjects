import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasstovesComponent } from './gasstoves.component';

describe('GasstovesComponent', () => {
  let component: GasstovesComponent;
  let fixture: ComponentFixture<GasstovesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GasstovesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GasstovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
