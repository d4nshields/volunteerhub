import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VolunteerHubCoreService } from './volunteerhub-core.service';

describe('VolunteerHubCoreService', () => {
  let service: VolunteerHubCoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VolunteerHubCoreService],
    }).compileComponents();

    service = TestBed.inject(VolunteerHubCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set authentication credentials', async () => {
    await service.setAuth('jestuser', 'jestpassword');
    const auth = service.getAuthCredentials();
    expect(auth?.username).toBe('jestuser');
  });
});
