export * from './donations.service';
import { DonationsService } from './donations.service';
export * from './eventGroups.service';
import { EventGroupsService } from './eventGroups.service';
export * from './events.service';
import { EventsService } from './events.service';
export * from './organization.service';
import { OrganizationService } from './organization.service';
export * from './userGroups.service';
import { UserGroupsService } from './userGroups.service';
export * from './users.service';
import { UsersService } from './users.service';
export const APIS = [DonationsService, EventGroupsService, EventsService, OrganizationService, UserGroupsService, UsersService];
