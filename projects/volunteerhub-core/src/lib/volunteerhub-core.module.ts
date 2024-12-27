import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { VolunteerHubCoreService } from './services/volunteerhub-core.service';
import { Configuration } from './services/configuration';

// Import generated services
import { EventsService } from './services/api/events.service';
import { DonationsService } from './services/api/donations.service';
import { OrganizationService } from './services/api/organization.service';
import { UsersService } from './services/api/users.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    VolunteerHubCoreService,
    {
      provide: Configuration,
      useFactory: (authService: VolunteerHubCoreService) =>
        authService.getConfig(),
      deps: [VolunteerHubCoreService],
    },
    EventsService,
    DonationsService,
    OrganizationService,
    UsersService,
  ],
})
export class VolunteerHubCoreModule {}
