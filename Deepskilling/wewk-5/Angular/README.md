# Module 8 – Angular (v20.0)

4 Angular 20 (standalone-component style) projects covering the concepts in Module 8: components/directives/pipes, forms, DI/routing/HTTP, and RxJS/state management/testing.

| # | Project | Module 8 Topics Covered |
|---|---------|--------------------------|
| 1 | `01-Components-Directives-Pipes` | Components, property/event/two-way binding, lifecycle hooks, `@Input`/`@Output`, structural & attribute directives, custom directive, built-in + custom pipes |
| 2 | `02-Forms-Validation` | Template-driven forms (`ngModel`, validation), Reactive forms (`FormBuilder`, `FormGroup`, `FormArray`, built-in + custom validators) |
| 3 | `03-Services-DI-Routing-HTTP` | Dependency injection (root vs component-level), routing (params, nested routes, lazy loading), guards (`CanActivate`, `CanDeactivate`), resolver, `HttpClient` (GET/POST/PUT/DELETE), interceptors (auth header, logging/error handling) |
| 4 | `04-RxJS-State-Testing` | RxJS operators (`map`, `filter`, `switchMap`, `mergeMap`, `catchError`), state management (service + NgRx: Store/Actions/Reducers/Effects/Selectors), unit testing with Jasmine/Karma |

## How to run any project
```bash
cd 0X-ProjectName
npm install
npm start
```
Then open `http://localhost:4200`. Project 4 additionally supports `npm test` for its Jasmine/Karma unit tests.

## Notes
- All components use Angular 20's default **standalone** style (no `NgModule`s) — each component declares its own `imports` array.
- Project 3's `authGuard` reads a `authToken` value from `localStorage`; set one manually in the browser console (`localStorage.setItem('authToken','demo')`) before testing the guarded route.
- Project 4 uses `@ngrx/store` + `@ngrx/effects` for the "advanced state management" objective, alongside a simpler service-based (`BehaviorSubject`) approach for comparison.

## Author
Kakumanu Venkata Sadwik — B.Tech CSE, VFSTR
