import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GysersComponent } from './gysers.component';

describe('GysersComponent', () => {
  let component: GysersComponent;
  let fixture: ComponentFixture<GysersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GysersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GysersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
