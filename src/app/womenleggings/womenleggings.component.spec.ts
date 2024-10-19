import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenleggingsComponent } from './womenleggings.component';

describe('WomenleggingsComponent', () => {
  let component: WomenleggingsComponent;
  let fixture: ComponentFixture<WomenleggingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenleggingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomenleggingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
