# 04 - RxJS, State Management & Testing

## RxJS (`rxjs-demo`)
- `map` + `filter` — transform and narrow a stream (doubling even numbers)
- `switchMap` — cancels the previous inner observable when a new value arrives (type-ahead search pattern)
- `mergeMap` — runs inner observables concurrently and merges results as they land
- `catchError` — recovers from an error with a fallback value instead of breaking the stream
- Manual `Subscription` management + `ngOnDestroy` cleanup to avoid memory leaks

## State Management (`state-demo`)
- **Service-based state**: `CartStateService` holds state in a `BehaviorSubject`, exposes it as a read-only `Observable`, and only allows mutation through explicit methods (`addItem`, `removeItem`).
- **NgRx** (`store/`): full `Store → Actions → Reducer → Selectors → Effects` slice for a counter feature.
  - `counter.actions.ts` — what happened
  - `counter.reducer.ts` — pure state transition function
  - `counter.selectors.ts` — derived/computed reads from the store
  - `counter.effects.ts` — side effects (simulated API call) triggered by an action

## Testing (`*.spec.ts`)
- `cart-state.service.spec.ts` — **service testing**: verifies add/remove/merge logic and the derived `totalItemCount`.
- `state-demo.component.spec.ts` — **component testing**: uses `TestBed` with a real NgRx store to verify dispatched actions actually change state, and that `addToCart()` updates the cart observable.

Run tests:
```bash
npm install
npm test
```

## Run the app
```bash
npm start
```
