import {createAction, props} from "@ngrx/store";

export const Login = createAction(
    '[Admin Auth] login',
    props<{login: string, password: string}>()
);

export const LoginSuccess = createAction(
    '[Admin Auth] login success',
    props<{accessToken: string}>()
);

export const LoginFailed = createAction(
    '[Admin Auth] login failed',
    props<{serverError: string}>()
);
