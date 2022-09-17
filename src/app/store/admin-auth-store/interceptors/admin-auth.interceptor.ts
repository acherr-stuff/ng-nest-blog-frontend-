import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AdminAuthService} from "../services/admin-auth.service";

@Injectable()
export class AdminAuthInterceptor implements HttpInterceptor {

  constructor(private adminAuthService: AdminAuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    // 1 - проверить налисие токена

    // 1.1 если токен есть, добавить заголовок "Bearer token"

    if (this.adminAuthService.accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.adminAuthService.accessToken}`
        }
      })
    }


    return next.handle(request);

  }
}
