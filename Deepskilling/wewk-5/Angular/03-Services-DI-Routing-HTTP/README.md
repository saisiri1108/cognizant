# 03 - Services, Dependency Injection, Routing & HTTP

## Dependency Injection
- `DataService` — `@Injectable({ providedIn: 'root' })`: one shared instance app-wide.
- `CounterService` — registered in `HomeComponent`'s `providers` array instead: a fresh instance per component subtree. This is **hierarchical DI** (root vs component-level injectors).

## Routing & Navigation
- `app.routes.ts` configures all routes, including:
  - Route parameters (`/users/:id`) and query parameters (`?ref=home-list`)
  - Nested/child routes (`reports.routes.ts` → `/reports/summary`)
  - **Lazy loading** via `loadChildren` — the Reports feature's code is only downloaded when visited
  - **Guards**: `authGuard` (`CanActivate`), `unsavedChangesGuard` (`CanDeactivate`)
  - **Resolver**: `userResolver` pre-fetches user data before `UserDetailComponent` is even created

> Note: `authGuard` checks `localStorage.getItem('authToken')`. Run `localStorage.setItem('authToken', 'demo')` in the browser console before visiting `/users/:id`, or you'll be redirected to `/home`.

## HTTP Client & Interceptors
- `DataService` uses `HttpClient` for GET/POST/PUT/DELETE against a public test API.
- `authInterceptor` — attaches an `Authorization: Bearer <token>` header to every outgoing request.
- `loggingInterceptor` — logs request/response timing and centralizes error handling.
- Both are registered in `app.config.ts` via `provideHttpClient(withInterceptors([...]))`.

## Run
```bash
npm install
npm start
```
