import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopstandComponent } from './laptopstand.component';

describe('LaptopstandComponent', () => {
  let component: LaptopstandComponent;
  let fixture: ComponentFixture<LaptopstandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopstandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaptopstandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
