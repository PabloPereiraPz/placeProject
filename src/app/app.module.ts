import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OAuthModule } from 'angular-oauth2-oidc';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { provideOAuthClient } from 'angular-oauth2-oidc'
 
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OAuthModule.forRoot()
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideOAuthClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
