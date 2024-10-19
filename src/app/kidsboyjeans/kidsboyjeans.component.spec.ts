import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsboyjeansComponent } from './kidsboyjeans.component';

describe('KidsboyjeansComponent', () => {
  let component: KidsboyjeansComponent;
  let fixture: ComponentFixture<KidsboyjeansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsboyjeansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidsboyjeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
