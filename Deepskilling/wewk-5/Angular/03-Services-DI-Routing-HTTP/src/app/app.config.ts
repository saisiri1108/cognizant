import { ApplicationConfig } from '@angular/core';
import { provideRouter, withNavigationErrorHandler } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth.interceptor';
import { loggingInterceptor } from './interceptors/logging.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      // Router event example: log every failed navigation (e.g. blocked by a guard).
      withNavigationErrorHandler((error) => console.error('Navigation error:', error))
    ),
    // Interceptors run in the order listed for every HttpClient request/response.
    provideHttpClient(withInterceptors([authInterceptor, loggingInterceptor]))
  ]
};
