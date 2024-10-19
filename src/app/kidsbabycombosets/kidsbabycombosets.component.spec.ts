import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsbabycombosetsComponent } from './kidsbabycombosets.component';

describe('KidsbabycombosetsComponent', () => {
  let component: KidsbabycombosetsComponent;
  let fixture: ComponentFixture<KidsbabycombosetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsbabycombosetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidsbabycombosetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
