import { TestBed } from '@angular/core/testing';

import { ServiceForLocalService } from './service-for-local.service';

describe('ServiceForLocalService', () => {
  let service: ServiceForLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceForLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
