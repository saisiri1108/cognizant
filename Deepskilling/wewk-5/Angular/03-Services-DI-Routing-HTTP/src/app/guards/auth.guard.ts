import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

// Functional route guard (Angular 15+). Runs BEFORE a route is activated -
// if it returns false/UrlTree, navigation is blocked/redirected.
export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isLoggedIn = !!localStorage.getItem('authToken');

  if (isLoggedIn) {
    return true;
  }

  router.navigate(['/home']);
  return false;
};
