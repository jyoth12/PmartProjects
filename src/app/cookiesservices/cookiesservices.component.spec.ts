import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesservicesComponent } from './cookiesservices.component';

describe('CookiesservicesComponent', () => {
  let component: CookiesservicesComponent;
  let fixture: ComponentFixture<CookiesservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookiesservicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CookiesservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
