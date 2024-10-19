import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HplaptopsComponent } from './hplaptops.component';

describe('HplaptopsComponent', () => {
  let component: HplaptopsComponent;
  let fixture: ComponentFixture<HplaptopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HplaptopsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HplaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
