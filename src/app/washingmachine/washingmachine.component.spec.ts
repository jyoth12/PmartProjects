import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingmachineComponent } from './washingmachine.component';

describe('WashingmachineComponent', () => {
  let component: WashingmachineComponent;
  let fixture: ComponentFixture<WashingmachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WashingmachineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WashingmachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
