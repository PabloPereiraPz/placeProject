import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core'
import { AuthgoogleService } from './authgoogle.service'

export const authGuard: CanActivateFn = (route, state) => {

  const loginSerivce: AuthgoogleService = inject(AuthgoogleService);
  const router: Router = inject(Router);

  const loggedProfile = loginSerivce.getLoggedProfile();

  if (loggedProfile) {
    return true;
  }

  router.navigate([''])

  return false;
};
