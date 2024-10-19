import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricricecookerComponent } from './electricricecooker.component';

describe('ElectricricecookerComponent', () => {
  let component: ElectricricecookerComponent;
  let fixture: ComponentFixture<ElectricricecookerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricricecookerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectricricecookerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
