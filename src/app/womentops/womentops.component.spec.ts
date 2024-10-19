import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomentopsComponent } from './womentops.component';

describe('WomentopsComponent', () => {
  let component: WomentopsComponent;
  let fixture: ComponentFixture<WomentopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomentopsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomentopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
