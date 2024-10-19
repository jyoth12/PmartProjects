import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SofasetComponent } from './sofaset.component';

describe('SofasetComponent', () => {
  let component: SofasetComponent;
  let fixture: ComponentFixture<SofasetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SofasetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SofasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
