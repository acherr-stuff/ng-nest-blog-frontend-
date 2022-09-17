import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {ADMIN_AUTH_FEATURE_NAME, adminAuthReducer} from "./store/admin-auth.reducer";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtHelperService, JwtModule} from "@auth0/angular-jwt";
import {AdminAuthInterceptor} from "./interceptors/admin-auth.interceptor";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: request => request as any
      }
    }),
    HttpClientModule,
    StoreModule.forFeature(ADMIN_AUTH_FEATURE_NAME, adminAuthReducer)
  ],
  providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AdminAuthInterceptor,
        multi: true
      }
  ]
})
export class AdminAuthStoreModule { }
