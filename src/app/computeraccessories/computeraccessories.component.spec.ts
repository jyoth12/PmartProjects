import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputeraccessoriesComponent } from './computeraccessories.component';

describe('ComputeraccessoriesComponent', () => {
  let component: ComputeraccessoriesComponent;
  let fixture: ComponentFixture<ComputeraccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputeraccessoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComputeraccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
