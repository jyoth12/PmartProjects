import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiwancotsComponent } from './diwancots.component';

describe('DiwancotsComponent', () => {
  let component: DiwancotsComponent;
  let fixture: ComponentFixture<DiwancotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiwancotsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiwancotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
