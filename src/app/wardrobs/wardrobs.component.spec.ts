import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardrobsComponent } from './wardrobs.component';

describe('WardrobsComponent', () => {
  let component: WardrobsComponent;
  let fixture: ComponentFixture<WardrobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WardrobsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WardrobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
