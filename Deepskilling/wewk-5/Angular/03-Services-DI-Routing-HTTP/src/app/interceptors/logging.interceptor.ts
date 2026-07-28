import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';

// Logs every request/response pair and centralizes error handling -
// so individual components/services don't need try/catch around every HTTP call.
export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const startTime = Date.now();
  console.log(`[HTTP] -> ${req.method} ${req.url}`);

  return next(req).pipe(
    tap(() => {
      const elapsed = Date.now() - startTime;
      console.log(`[HTTP] <- ${req.method} ${req.url} (${elapsed}ms)`);
    }),
    catchError((error) => {
      console.error(`[HTTP] Error on ${req.method} ${req.url}:`, error.message);
      // Re-throw so calling code can still react (e.g. show a toast), while the
      // interceptor takes care of the cross-cutting "log every failure" concern.
      return throwError(() => error);
    })
  );
};
