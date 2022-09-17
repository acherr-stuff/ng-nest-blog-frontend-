import {createReducer, on} from "@ngrx/store";
import {Login, LoginFailed, LoginSuccess} from "./admin-auth.actions";
export const ADMIN_AUTH_FEATURE_NAME = "admin-auth"

export interface AuthData {
    accessToken: string;
    // admin id in mysql
     id: number;
     iat: number;
    // //expiring timestamp
     exp: number
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

// @ts-ignore
// @ts-ignore
export const adminAuthReducer = createReducer(
    initialState,
    on(Login, state => ({
        ...state,
        loading: true
    })),
    //@ts-ignore
    on(LoginSuccess, (
        state, {
            type,
            ...authData
        }: {type: string} & AuthData) => ({
        ...state,
        authData,
        loaded: true,
        loading: false,
        serverError: ''
    })),
    on(LoginFailed, (state, {serverError}) => ({
        ...state,
        authData: null,
        loaded: true,
        loading: false,
        serverError: serverError
    })),
);
