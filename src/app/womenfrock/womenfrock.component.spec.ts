import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenfrockComponent } from './womenfrock.component';

describe('WomenfrockComponent', () => {
  let component: WomenfrockComponent;
  let fixture: ComponentFixture<WomenfrockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenfrockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomenfrockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
