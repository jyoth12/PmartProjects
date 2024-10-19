import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameratypesComponent } from './cameratypes.component';

describe('CameratypesComponent', () => {
  let component: CameratypesComponent;
  let fixture: ComponentFixture<CameratypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CameratypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CameratypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
