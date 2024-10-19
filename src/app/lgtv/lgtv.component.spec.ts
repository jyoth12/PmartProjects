import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgtvComponent } from './lgtv.component';

describe('LgtvComponent', () => {
  let component: LgtvComponent;
  let fixture: ComponentFixture<LgtvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LgtvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LgtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
