import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsboyshirtsComponent } from './kidsboyshirts.component';

describe('KidsboyshirtsComponent', () => {
  let component: KidsboyshirtsComponent;
  let fixture: ComponentFixture<KidsboyshirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsboyshirtsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidsboyshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
