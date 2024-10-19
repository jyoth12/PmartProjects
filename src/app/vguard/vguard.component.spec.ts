import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VguardComponent } from './vguard.component';

describe('VguardComponent', () => {
  let component: VguardComponent;
  let fixture: ComponentFixture<VguardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VguardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VguardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
