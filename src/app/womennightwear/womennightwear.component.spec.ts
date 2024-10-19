import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomennightwearComponent } from './womennightwear.component';

describe('WomennightwearComponent', () => {
  let component: WomennightwearComponent;
  let fixture: ComponentFixture<WomennightwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomennightwearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomennightwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
