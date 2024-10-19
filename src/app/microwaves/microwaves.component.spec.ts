import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrowavesComponent } from './microwaves.component';

describe('MicrowavesComponent', () => {
  let component: MicrowavesComponent;
  let fixture: ComponentFixture<MicrowavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicrowavesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MicrowavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
