import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressingtableComponent } from './dressingtable.component';

describe('DressingtableComponent', () => {
  let component: DressingtableComponent;
  let fixture: ComponentFixture<DressingtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DressingtableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DressingtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
