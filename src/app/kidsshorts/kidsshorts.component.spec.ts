import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsshortsComponent } from './kidsshorts.component';

describe('KidsshortsComponent', () => {
  let component: KidsshortsComponent;
  let fixture: ComponentFixture<KidsshortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsshortsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidsshortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
