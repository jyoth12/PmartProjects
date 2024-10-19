import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookersComponent } from './cookers.component';

describe('CookersComponent', () => {
  let component: CookersComponent;
  let fixture: ComponentFixture<CookersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CookersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
