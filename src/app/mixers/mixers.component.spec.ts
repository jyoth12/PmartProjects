import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixersComponent } from './mixers.component';

describe('MixersComponent', () => {
  let component: MixersComponent;
  let fixture: ComponentFixture<MixersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MixersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MixersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
