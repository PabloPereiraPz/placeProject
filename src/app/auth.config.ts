import { AuthConfig } from 'angular-oauth2-oidc'

export const auth: AuthConfig = {
    issuer: 'https://accounts.google.com', // é quem fez a autenticação
    redirectUri: window.location.origin,
    clientId: '49830763903-bmkvi79cd6dtlscq761v23aa17nn9jif.apps.googleusercontent.com',
    scope: 'openid profile email',
    strictDiscoveryDocumentValidation: false,
}