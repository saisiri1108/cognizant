import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, map, of, switchMap } from 'rxjs';
import { loadCounter, loadCounterSuccess } from './counter.actions';

// Effects handle side effects (HTTP calls, localStorage, timers) that reducers
// must NOT do (reducers have to stay pure). An Effect listens for an action,
// performs the side effect, and dispatches a new action with the result.
@Injectable()
export class CounterEffects {
  loadCounter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCounter),
      switchMap(() =>
        // Simulated backend call - in a real app this would be an HttpClient request.
        of(42).pipe(
          delay(300),
          map((value) => loadCounterSuccess({ value }))
        )
      )
    )
  );

  constructor(private actions$: Actions) {}
}
