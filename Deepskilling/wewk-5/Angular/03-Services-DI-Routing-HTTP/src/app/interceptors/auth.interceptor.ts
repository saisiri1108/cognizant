import { HttpInterceptorFn } from '@angular/common/http';

// Angular 15+ functional interceptor style. Runs for every HttpClient request made
// anywhere in the app - the standard way to attach auth headers globally instead of
// repeating `headers: {...}` on every individual HTTP call.
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('authToken');

  const authReq = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(authReq);
};
