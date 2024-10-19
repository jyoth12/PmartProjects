import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistpopupComponent } from './wishlistpopup.component';

describe('WishlistpopupComponent', () => {
  let component: WishlistpopupComponent;
  let fixture: ComponentFixture<WishlistpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishlistpopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WishlistpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
