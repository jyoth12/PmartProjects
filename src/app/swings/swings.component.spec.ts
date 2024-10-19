import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwingsComponent } from './swings.component';

describe('SwingsComponent', () => {
  let component: SwingsComponent;
  let fixture: ComponentFixture<SwingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
