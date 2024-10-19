import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalbedsComponent } from './normalbeds.component';

describe('NormalbedsComponent', () => {
  let component: NormalbedsComponent;
  let fixture: ComponentFixture<NormalbedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NormalbedsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NormalbedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
