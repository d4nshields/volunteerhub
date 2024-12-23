import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerHubEventCardComponent } from './volunteerhub-event-card/volunteerhub-event-card.component';

@NgModule({
  imports: [
    CommonModule,  // Import CommonModule for Angular pipes/directives
    VolunteerHubEventCardComponent
  ],
  exports: [
    VolunteerHubEventCardComponent,  // Export components for use outside this module
  ],
})
export class VolunteerHubComponentsModule {}
