import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclinerComponent } from './recliner.component';

describe('ReclinerComponent', () => {
  let component: ReclinerComponent;
  let fixture: ComponentFixture<ReclinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReclinerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReclinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
