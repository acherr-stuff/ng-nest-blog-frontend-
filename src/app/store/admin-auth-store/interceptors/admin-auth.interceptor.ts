import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import {AdminAuthService} from "../services/admin-auth.service";
import {select, Store} from "@ngrx/store";
import {getAccessToken} from "../store/admin-auth.selectors";
import {catchError, first, flatMap} from "rxjs/operators";

@Injectable()
export class AdminAuthInterceptor implements HttpInterceptor {

  constructor(
      private store$: Store
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return this.store$.pipe(
        select(getAccessToken),
        // чтобы взялся только первый токен из observable
        first(),
        flatMap(token => {
          const authRequest = token ? request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          }) : request;
          return next.handle(authRequest).pipe(
            catchError(err => {
                if (err instanceof HttpErrorResponse) {
                    if ( err.status === 401) {
                        console.log("redirect on login page or sign out");
                        return EMPTY
                    }
                }

                throw err;
            })
          );
        })
    );

    // 1 - проверить налисие токена

    // 1.1 если токен есть, добавить заголовок "Bearer token"

    // if (this.adminAuthService.accessToken) {
    //   request = request.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ${this.adminAuthService.accessToken}`
    //     }
    //   })
    // }


    //return next.handle(request);

  }
}
