import { TestBed } from '@angular/core/testing';

import { RouteGardtoinfoUpdateService } from './route-gardtoinfo-update.service';

describe('RouteGardtoinfoUpdateService', () => {
  let service: RouteGardtoinfoUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGardtoinfoUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
