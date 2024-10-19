import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenovalaptopComponent } from './lenovalaptop.component';

describe('LenovalaptopComponent', () => {
  let component: LenovalaptopComponent;
  let fixture: ComponentFixture<LenovalaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LenovalaptopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LenovalaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
