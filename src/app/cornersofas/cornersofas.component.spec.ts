import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CornersofasComponent } from './cornersofas.component';

describe('CornersofasComponent', () => {
  let component: CornersofasComponent;
  let fixture: ComponentFixture<CornersofasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CornersofasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CornersofasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
