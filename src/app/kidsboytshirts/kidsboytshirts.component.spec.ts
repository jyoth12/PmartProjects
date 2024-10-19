import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsboytshirtsComponent } from './kidsboytshirts.component';

describe('KidsboytshirtsComponent', () => {
  let component: KidsboytshirtsComponent;
  let fixture: ComponentFixture<KidsboytshirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsboytshirtsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidsboytshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
