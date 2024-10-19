import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficechairsComponent } from './officechairs.component';

describe('OfficechairsComponent', () => {
  let component: OfficechairsComponent;
  let fixture: ComponentFixture<OfficechairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficechairsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfficechairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
