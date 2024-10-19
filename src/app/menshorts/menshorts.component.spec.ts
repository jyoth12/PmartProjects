import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenshortsComponent } from './menshorts.component';

describe('MenshortsComponent', () => {
  let component: MenshortsComponent;
  let fixture: ComponentFixture<MenshortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenshortsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenshortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
