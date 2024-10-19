import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandbagesComponent } from './handbages.component';

describe('HandbagesComponent', () => {
  let component: HandbagesComponent;
  let fixture: ComponentFixture<HandbagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandbagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandbagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
