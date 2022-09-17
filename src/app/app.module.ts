import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {WebsiteModule} from "./routing/website/website.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {environment} from "../environments/environment";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule} from '@ngrx/router-store';
import {AdminAuthStoreModule} from "./store/admin-auth-store/admin-auth-store.module";
import {EffectsModule} from "@ngrx/effects";
import {AdminAuthEffects} from "./store/admin-auth-store/store/admin-auth.effects";
import {JwtHelperService} from "@auth0/angular-jwt";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    WebsiteModule,
    BrowserAnimationsModule,
    StoreModule.forRoot( {}, {
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
    AdminAuthStoreModule,
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([AdminAuthEffects])
    ///StoreModule.forRoot({}, {}),
   // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
