import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsboyshortsComponent } from './kidsboyshorts.component';

describe('KidsboyshortsComponent', () => {
  let component: KidsboyshortsComponent;
  let fixture: ComponentFixture<KidsboyshortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsboyshortsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidsboyshortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
