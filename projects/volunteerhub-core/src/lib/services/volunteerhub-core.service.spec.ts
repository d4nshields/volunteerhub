import { TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { VolunteerHubCoreService } from './volunteerhub-core.service';

describe('VolunteerHubCoreService', () => {
  let service: VolunteerHubCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withInterceptorsFromDi())],  // New Approach
    });
    service = TestBed.inject(VolunteerHubCoreService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
