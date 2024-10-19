import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosiesmartwatchsComponent } from './nosiesmartwatchs.component';

describe('NosiesmartwatchsComponent', () => {
  let component: NosiesmartwatchsComponent;
  let fixture: ComponentFixture<NosiesmartwatchsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosiesmartwatchsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NosiesmartwatchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
