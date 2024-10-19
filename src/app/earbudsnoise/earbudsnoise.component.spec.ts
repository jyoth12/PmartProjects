import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarbudsnoiseComponent } from './earbudsnoise.component';

describe('EarbudsnoiseComponent', () => {
  let component: EarbudsnoiseComponent;
  let fixture: ComponentFixture<EarbudsnoiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarbudsnoiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EarbudsnoiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
