import { TestBed } from '@angular/core/testing';

import { RouteGardService } from './route-gard.service';

describe('RouteGardService', () => {
  let service: RouteGardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
