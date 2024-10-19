import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiningtableComponent } from './diningtable.component';

describe('DiningtableComponent', () => {
  let component: DiningtableComponent;
  let fixture: ComponentFixture<DiningtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiningtableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiningtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
