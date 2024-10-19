import { TestBed } from '@angular/core/testing';

import { FormnavigationserviceService } from './formnavigationservice.service';

describe('FormnavigationserviceService', () => {
  let service: FormnavigationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormnavigationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
