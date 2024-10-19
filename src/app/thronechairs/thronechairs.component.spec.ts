import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThronechairsComponent } from './thronechairs.component';

describe('ThronechairsComponent', () => {
  let component: ThronechairsComponent;
  let fixture: ComponentFixture<ThronechairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThronechairsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThronechairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
