import { TestBed } from '@angular/core/testing';

import { ServiceCService } from './service-c.service';

describe('ServiceCService', () => {
  let service: ServiceCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
