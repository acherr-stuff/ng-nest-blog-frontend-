import {Injectable} from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {Login, LoginFailed, LoginSuccess} from "./admin-auth.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {AdminAuthService} from "../services/admin-auth.service";


@Injectable()
export class AdminAuthEffects {

    login$ = createEffect(() => this.actions$.pipe(
        ofType(Login),
        switchMap(action => this.adminAuthService.login({
            login: action.login,
            password: action.password
        }).pipe(
            map(loginSuccessData => LoginSuccess(loginSuccessData)),
            catchError(
                error => of(LoginFailed({
                    serverError: error.message}

                ))
            )
        ))
    ));

    constructor(
        private actions$: Actions,
        private adminAuthService: AdminAuthService
    ) {
    }
}
