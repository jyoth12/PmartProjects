import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingmachinesComponent } from './washingmachines.component';

describe('WashingmachinesComponent', () => {
  let component: WashingmachinesComponent;
  let fixture: ComponentFixture<WashingmachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WashingmachinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WashingmachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
