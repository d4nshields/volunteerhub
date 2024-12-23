import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Preferences } from '@capacitor/preferences';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VolunteerHubCoreService {
  private baseUrl: string = '';

  constructor(private http: HttpClient) {}

  // Dynamically set the base URL
  setBaseUrl(url: string): void {
    this.baseUrl = url;
  }

  // Store authentication credentials securely
  async setAuth(username: string, password: string): Promise<void> {
    await Preferences.set({
      key: 'auth',
      value: JSON.stringify({ username, password }),
    });
  }

  // Validate stored authentication
  async isAuthValid(): Promise<boolean> {
    const credentials = await Preferences.get({ key: 'auth' });
    if (!credentials.value) return false;

    const { username, password } = JSON.parse(credentials.value);
    try {
      const headers = this.createAuthHeaders(username, password);
      await this.http.get(`${this.baseUrl}/index`, { headers }).toPromise();
      return true;
    } catch {
      return false;
    }
  }

  // Fetch objects from the REST API
  get<T>(endpoint: string): Observable<T> {
    return new Observable((observer) => {
                  // note: the following async hack is due to lack of 'new Observable( async' support, see: https://github.com/ReactiveX/rxjs/issues/2827
      (async () => {
        const credentials = await Preferences.get({ key: 'auth' });
        if (!credentials.value) return;
    
        const { username, password } = JSON.parse(credentials.value);
        const headers = this.createAuthHeaders(username, password);
    
        this.http.get<T>(`${this.baseUrl}/${endpoint}`, { headers }).subscribe({
          next: (data) => observer.next(data),
          error: (error) => observer.error(error),
          complete: () => observer.complete(),  // Optional
        });
      })
    });
  }

  private createAuthHeaders(username: string, password: string): HttpHeaders {
    const authHeader = `Basic ${btoa(`${username}:${password}`)}`;
    return new HttpHeaders({ Authorization: authHeader });
  }
}
