import { NgModule } from '@angular/core';
import { VolunteerHubComponentsModule } from './components/volunteerhub-components.module';
import { VolunteerHubServicesModule } from './services/volunteerhub-services.module';

@NgModule({
  imports: [
    VolunteerHubComponentsModule,
    VolunteerHubServicesModule
  ],
  exports: [VolunteerHubComponentsModule,
    VolunteerHubServicesModule
  ],
})
export class VolunteerHubCoreModule {}
