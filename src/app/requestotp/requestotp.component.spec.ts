import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestotpComponent } from './requestotp.component';

describe('RequestotpComponent', () => {
  let component: RequestotpComponent;
  let fixture: ComponentFixture<RequestotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestotpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
