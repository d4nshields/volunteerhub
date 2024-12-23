import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'volunteerhub-event-card',
  standalone: true,
  template: `
    <div class="event-card">
      <h3>{{ event.name }}</h3>
      <p><strong>Location:</strong> {{ event.location }}</p>
      <p>
        <strong>Time:</strong>
        {{ event.startTime | date: 'shortTime' }} -
        {{ event.endTime | date: 'shortTime' }}
      </p>
    </div>
  `,
  styles: [`
    .event-card {
      border: 1px solid #ddd;
      padding: 15px;
      border-radius: 8px;
    }
  `],
  imports: [CommonModule]
})
export class VolunteerHubEventCardComponent {
  @Input() event!: {
    name: string;
    location: string;
    startTime: string;
    endTime: string;
  };
}
