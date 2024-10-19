import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensweatshirtComponent } from './mensweatshirt.component';

describe('MensweatshirtComponent', () => {
  let component: MensweatshirtComponent;
  let fixture: ComponentFixture<MensweatshirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensweatshirtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MensweatshirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
