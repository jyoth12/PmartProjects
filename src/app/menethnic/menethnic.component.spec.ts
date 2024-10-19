import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenethnicComponent } from './menethnic.component';

describe('MenethnicComponent', () => {
  let component: MenethnicComponent;
  let fixture: ComponentFixture<MenethnicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenethnicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenethnicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
