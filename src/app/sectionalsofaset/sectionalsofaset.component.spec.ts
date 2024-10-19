import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionalsofasetComponent } from './sectionalsofaset.component';

describe('SectionalsofasetComponent', () => {
  let component: SectionalsofasetComponent;
  let fixture: ComponentFixture<SectionalsofasetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionalsofasetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionalsofasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
