import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenjacketsComponent } from './menjackets.component';

describe('MenjacketsComponent', () => {
  let component: MenjacketsComponent;
  let fixture: ComponentFixture<MenjacketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenjacketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenjacketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
