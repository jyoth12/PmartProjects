import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeetableComponent } from './coffeetable.component';

describe('CoffeetableComponent', () => {
  let component: CoffeetableComponent;
  let fixture: ComponentFixture<CoffeetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeetableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoffeetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
