import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdertraceComponent } from './ordertrace.component';

describe('OrdertraceComponent', () => {
  let component: OrdertraceComponent;
  let fixture: ComponentFixture<OrdertraceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdertraceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdertraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
