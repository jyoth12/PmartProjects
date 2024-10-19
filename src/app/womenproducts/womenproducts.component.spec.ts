import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenproductsComponent } from './womenproducts.component';

describe('WomenproductsComponent', () => {
  let component: WomenproductsComponent;
  let fixture: ComponentFixture<WomenproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenproductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomenproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
