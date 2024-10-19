import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenjeanComponent } from './menjean.component';

describe('MenjeanComponent', () => {
  let component: MenjeanComponent;
  let fixture: ComponentFixture<MenjeanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenjeanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenjeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
