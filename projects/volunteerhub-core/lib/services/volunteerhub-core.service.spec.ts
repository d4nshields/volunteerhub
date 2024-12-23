import { TestBed } from '@angular/core/testing';

import { VolunteerhubCoreService } from './volunteerhub-core.service';

describe('VolunteerhubCoreService', () => {
  let service: VolunteerhubCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolunteerhubCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
