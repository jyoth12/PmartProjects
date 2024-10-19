import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmaroninvertersComponent } from './amaroninverters.component';

describe('AmaroninvertersComponent', () => {
  let component: AmaroninvertersComponent;
  let fixture: ComponentFixture<AmaroninvertersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmaroninvertersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmaroninvertersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
