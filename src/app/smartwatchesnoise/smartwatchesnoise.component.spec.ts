import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartwatchesnoiseComponent } from './smartwatchesnoise.component';

describe('SmartwatchesnoiseComponent', () => {
  let component: SmartwatchesnoiseComponent;
  let fixture: ComponentFixture<SmartwatchesnoiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartwatchesnoiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmartwatchesnoiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
