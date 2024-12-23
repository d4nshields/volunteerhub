import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerHubCoreComponent } from './volunteerhub-core.component';

describe('VolunteerHubCoreComponent', () => {
  let component: VolunteerHubCoreComponent;
  let fixture: ComponentFixture<VolunteerHubCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteerHubCoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerHubCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
