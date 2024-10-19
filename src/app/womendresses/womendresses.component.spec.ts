import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomendressesComponent } from './womendresses.component';

describe('WomendressesComponent', () => {
  let component: WomendressesComponent;
  let fixture: ComponentFixture<WomendressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomendressesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomendressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
