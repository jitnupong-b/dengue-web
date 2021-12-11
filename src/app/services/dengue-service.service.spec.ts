import { TestBed } from '@angular/core/testing';

import { DengueServiceService } from './dengue-service.service';

describe('DengueServiceService', () => {
  let service: DengueServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DengueServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
