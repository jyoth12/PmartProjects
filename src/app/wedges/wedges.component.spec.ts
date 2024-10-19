import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WedgesComponent } from './wedges.component';

describe('WedgesComponent', () => {
  let component: WedgesComponent;
  let fixture: ComponentFixture<WedgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WedgesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WedgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
