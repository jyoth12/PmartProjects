import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsboyethnicwearComponent } from './kidsboyethnicwear.component';

describe('KidsboyethnicwearComponent', () => {
  let component: KidsboyethnicwearComponent;
  let fixture: ComponentFixture<KidsboyethnicwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsboyethnicwearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidsboyethnicwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
