import { TestBed } from '@angular/core/testing';

import { LocalservicesService } from './localservices.service';

describe('LocalservicesService', () => {
  let service: LocalservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
