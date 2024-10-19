import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenkurtasComponent } from './womenkurtas.component';

describe('WomenkurtasComponent', () => {
  let component: WomenkurtasComponent;
  let fixture: ComponentFixture<WomenkurtasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenkurtasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomenkurtasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
