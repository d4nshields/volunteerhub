import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { VolunteerHubCoreService } from './volunteerhub-core.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private authService: VolunteerHubCoreService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const credentials = this.authService.getAuthCredentials();
    if (credentials) {
      const { username, password } = credentials;
      req = req.clone({
        setHeaders: {
          Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        },
      });
    }
    return next.handle(req);
  }
}
