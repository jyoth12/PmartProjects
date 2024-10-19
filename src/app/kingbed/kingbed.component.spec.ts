import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingbedComponent } from './kingbed.component';

describe('KingbedComponent', () => {
  let component: KingbedComponent;
  let fixture: ComponentFixture<KingbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KingbedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KingbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
