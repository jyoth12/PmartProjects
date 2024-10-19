import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DellaptopsComponent } from './dellaptops.component';

describe('DellaptopsComponent', () => {
  let component: DellaptopsComponent;
  let fixture: ComponentFixture<DellaptopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DellaptopsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DellaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
