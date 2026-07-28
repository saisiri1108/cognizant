import { createAction, props } from '@ngrx/store';

// Actions describe "what happened" - the only way to trigger a state change in NgRx.
export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');

// An action carrying a payload, used to demonstrate an Effect below
// (e.g. "load the counter's saved value from a backend").
export const loadCounter = createAction('[Counter] Load');
export const loadCounterSuccess = createAction(
  '[Counter] Load Success',
  props<{ value: number }>()
);
