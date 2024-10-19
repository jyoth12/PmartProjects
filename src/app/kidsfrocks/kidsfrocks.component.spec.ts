import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsfrocksComponent } from './kidsfrocks.component';

describe('KidsfrocksComponent', () => {
  let component: KidsfrocksComponent;
  let fixture: ComponentFixture<KidsfrocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsfrocksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidsfrocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
