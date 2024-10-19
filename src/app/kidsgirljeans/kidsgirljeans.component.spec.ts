import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsgirljeansComponent } from './kidsgirljeans.component';

describe('KidsgirljeansComponent', () => {
  let component: KidsgirljeansComponent;
  let fixture: ComponentFixture<KidsgirljeansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsgirljeansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidsgirljeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
