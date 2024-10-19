import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeanbagComponent } from './beanbag.component';

describe('BeanbagComponent', () => {
  let component: BeanbagComponent;
  let fixture: ComponentFixture<BeanbagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeanbagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeanbagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
