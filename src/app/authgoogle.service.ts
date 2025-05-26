import { Injectable, Inject, signal, inject } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc'
import { auth } from './auth.config'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthgoogleService {

  private oathService: OAuthService = inject(OAuthService);
  private router: Router = inject(Router);
  profile = signal<any>(null);

  constructor() { }
  initConfiguration() {
    this.oathService.configure(auth);
    this.oathService.setupAutomaticSilentRefresh();
    this.oathService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oathService.hasValidAccessToken()) {
        this.profile.set(this.oathService.getIdentityClaims());
      }
    }).catch(error => {
      console.error('Error loading discovery document:', error);
    });
  }

  login() {
    this.oathService.initImplicitFlow(); // fluxo de autenticação do google.
  }

  logout() {
    this.oathService.revokeTokenAndLogout(); // revogando autenticação
    this.oathService.logOut();
    this.profile.set(null);
    this.router.navigate([''])
  }

  getLoggedProfile() {
    return this.profile();
  }

}
