import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VolunteerHubCoreService } from './volunteerhub-core.service';
import { Configuration } from './configuration';
import { Preferences } from '@capacitor/preferences';

describe('VolunteerHubCoreService', () => {
  let service: VolunteerHubCoreService;
  let httpMock: HttpTestingController;
  let configuration: Configuration;

  beforeEach(async () => {
    await Preferences.clear(); // Clear preferences before each test to avoid conflicts

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VolunteerHubCoreService, Configuration],
    });

    service = TestBed.inject(VolunteerHubCoreService);
    httpMock = TestBed.inject(HttpTestingController);
    configuration = TestBed.inject(Configuration);

    // Set basePath dynamically for testing
    service.setBaseUrl('https://dailybread.volunteerhub.com/api/v1');
  });

  afterEach(() => {
    httpMock.verify();  // Ensure no unmatched requests are left
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and retrieve authentication credentials', async () => {
    await service.setAuth('testuser', 'testpassword');
    const auth = service.getAuthCredentials();

    expect(auth).toBeTruthy();
    expect(auth?.username).toBe('testuser');
    expect(auth?.password).toBe('testpassword');
  });

  it('should store credentials in Preferences', async () => {
    await service.setAuth('storeUser', 'storePassword');

    const stored = await Preferences.get({ key: 'auth' });
    expect(stored.value).toBeTruthy();

    const { username, password } = JSON.parse(stored.value!);
    expect(username).toBe('storeUser');
    expect(password).toBe('storePassword');
  });

  it('should load credentials from Preferences', async () => {
    // Simulate stored credentials
    await Preferences.set({
      key: 'auth',
      value: JSON.stringify({ username: 'loadedUser', password: 'loadedPass' }),
    });

    await service.loadAuthFromStorage();
    const auth = service.getAuthCredentials();

    expect(auth?.username).toBe('loadedUser');
    expect(auth?.password).toBe('loadedPass');
  });

  it('should set basePath dynamically', () => {
    service.setBaseUrl('https://custom.volunteerhub.com/api/v1');
    const config = service.getConfig();
    expect(config.basePath).toBe('https://custom.volunteerhub.com/api/v1');
  });

});
