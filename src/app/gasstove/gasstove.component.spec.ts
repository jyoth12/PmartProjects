import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasstoveComponent } from './gasstove.component';

describe('GasstoveComponent', () => {
  let component: GasstoveComponent;
  let fixture: ComponentFixture<GasstoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GasstoveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GasstoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
