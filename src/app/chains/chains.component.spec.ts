import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainsComponent } from './chains.component';

describe('ChainsComponent', () => {
  let component: ChainsComponent;
  let fixture: ComponentFixture<ChainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChainsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
