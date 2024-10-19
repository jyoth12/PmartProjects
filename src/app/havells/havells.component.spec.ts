import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HavellsComponent } from './havells.component';

describe('HavellsComponent', () => {
  let component: HavellsComponent;
  let fixture: ComponentFixture<HavellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HavellsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HavellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
