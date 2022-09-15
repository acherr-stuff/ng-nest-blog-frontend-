import {createReducer, on} from "@ngrx/store";
import {Login, LoginFailed, LoginSuccess} from "./admin-auth.actions";
export const ADMIN_AUTH_FEATURE_NAME = "admin-auth"

export interface AuthData {
    accessToken: string
}

export interface AdminAuthState {
    loading: boolean;
    loaded: boolean;
    serverError: string;
    authData?: AuthData
}

const initialState: AdminAuthState = {
    loading: false,
    loaded: true,
    serverError: ''
}

export const adminAuthReducer = createReducer(
    initialState,
    on(Login, state => ({
        ...state,
        loading: true
    })),
    on(LoginSuccess, (state, authData: AuthData) => ({
        ...state,
        authData: authData,
        loaded: true,
        loading: false,
        serverError: ""
    })),
    on(LoginFailed, (state, {serverError}) => ({
        ...state,
        authData: null,
        loaded: true,
        loading: false,
        serverError: serverError
    })),
);
