import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgComponent } from './lg.component';

describe('LgComponent', () => {
  let component: LgComponent;
  let fixture: ComponentFixture<LgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
