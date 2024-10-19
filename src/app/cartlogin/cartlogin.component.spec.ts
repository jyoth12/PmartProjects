import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartloginComponent } from './cartlogin.component';

describe('CartloginComponent', () => {
  let component: CartloginComponent;
  let fixture: ComponentFixture<CartloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartloginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
