import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Configuration, ConfigurationParameters } from './configuration';

@Injectable({
  providedIn: 'root',
})
export class VolunteerHubCoreService {
  private config: Configuration;

  constructor() {
    // Initialize Configuration with base path
    this.config = new Configuration();
  }

  setBaseUrl(url: string): void {
    this.config.basePath = url;
  }

  // Set authentication credentials (username and password)
  async setAuth(username: string, password: string): Promise<void> {
    this.config.username = username;
    this.config.password = password;

    // Persist the credentials for later use
    await Preferences.set({
      key: 'auth',
      value: JSON.stringify({ username, password }),
    });
  }

  // Load credentials from storage into the Configuration
  async loadAuthFromStorage(): Promise<void> {
    const credentials = await Preferences.get({ key: 'auth' });
    if (credentials.value) {
      const { username, password } = JSON.parse(credentials.value);
      this.config.username = username;
      this.config.password = password;
    }
  }

  getAuthCredentials(): any {
    return {
      username: this.config?.username,
      password: this.config?.password
    }
  }

  // Expose the configuration for injection into API services
  getConfig(): Configuration {
    return this.config;
  }
}
