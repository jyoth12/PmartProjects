import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsgirlethnicwearComponent } from './kidsgirlethnicwear.component';

describe('KidsgirlethnicwearComponent', () => {
  let component: KidsgirlethnicwearComponent;
  let fixture: ComponentFixture<KidsgirlethnicwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsgirlethnicwearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidsgirlethnicwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
