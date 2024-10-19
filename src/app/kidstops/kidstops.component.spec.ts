import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidstopsComponent } from './kidstops.component';

describe('KidstopsComponent', () => {
  let component: KidstopsComponent;
  let fixture: ComponentFixture<KidstopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidstopsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidstopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
