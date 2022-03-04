import { TestBed } from '@angular/core/testing';

import { ServicesCService } from './services-c.service';

describe('ServicesCService', () => {
  let service: ServicesCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
