import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VolunteerHubEventCardComponent } from './volunteerhub-event-card.component';
import { CommonModule } from '@angular/common';

describe('VolunteerHubEventCardComponent', () => {
  let component: VolunteerHubEventCardComponent;
  let fixture: ComponentFixture<VolunteerHubEventCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteerHubEventCardComponent, CommonModule],  // Import the standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(VolunteerHubEventCardComponent);
    component = fixture.componentInstance;

    // Provide the required input
    component.event = {
      name: 'Volunteer Orientation',
      location: 'Main Hall',
      startTime: '2024-12-17T10:00:00',
      endTime: '2024-12-17T12:00:00',
    };

    fixture.detectChanges();  // Trigger change detection after setting input
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct event name', () => {
    const title = fixture.nativeElement.querySelector('h3');
    expect(title.textContent).toContain('Volunteer Orientation');
  });
});
