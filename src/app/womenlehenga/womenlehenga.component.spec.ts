import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenlehengaComponent } from './womenlehenga.component';

describe('WomenlehengaComponent', () => {
  let component: WomenlehengaComponent;
  let fixture: ComponentFixture<WomenlehengaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenlehengaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomenlehengaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
