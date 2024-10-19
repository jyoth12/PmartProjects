import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilevivoComponent } from './mobilevivo.component';

describe('MobilevivoComponent', () => {
  let component: MobilevivoComponent;
  let fixture: ComponentFixture<MobilevivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobilevivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobilevivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
