import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeelsComponent } from './heels.component';

describe('HeelsComponent', () => {
  let component: HeelsComponent;
  let fixture: ComponentFixture<HeelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
