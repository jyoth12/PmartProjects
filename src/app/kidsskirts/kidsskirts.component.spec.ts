import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsskirtsComponent } from './kidsskirts.component';

describe('KidsskirtsComponent', () => {
  let component: KidsskirtsComponent;
  let fixture: ComponentFixture<KidsskirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsskirtsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidsskirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
