import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MendhotisComponent } from './mendhotis.component';

describe('MendhotisComponent', () => {
  let component: MendhotisComponent;
  let fixture: ComponentFixture<MendhotisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MendhotisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MendhotisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
