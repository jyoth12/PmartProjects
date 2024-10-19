import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplelaptopsComponent } from './applelaptops.component';

describe('ApplelaptopsComponent', () => {
  let component: ApplelaptopsComponent;
  let fixture: ComponentFixture<ApplelaptopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplelaptopsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplelaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
