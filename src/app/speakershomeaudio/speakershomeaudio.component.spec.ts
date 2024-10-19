import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakershomeaudioComponent } from './speakershomeaudio.component';

describe('SpeakershomeaudioComponent', () => {
  let component: SpeakershomeaudioComponent;
  let fixture: ComponentFixture<SpeakershomeaudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeakershomeaudioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeakershomeaudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
