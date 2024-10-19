import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluestarComponent } from './bluestar.component';

describe('BluestarComponent', () => {
  let component: BluestarComponent;
  let fixture: ComponentFixture<BluestarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BluestarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BluestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
