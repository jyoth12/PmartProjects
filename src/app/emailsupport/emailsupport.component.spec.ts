import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsupportComponent } from './emailsupport.component';

describe('EmailsupportComponent', () => {
  let component: EmailsupportComponent;
  let fixture: ComponentFixture<EmailsupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailsupportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailsupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
