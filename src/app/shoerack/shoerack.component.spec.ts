import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoerackComponent } from './shoerack.component';

describe('ShoerackComponent', () => {
  let component: ShoerackComponent;
  let fixture: ComponentFixture<ShoerackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoerackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoerackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
