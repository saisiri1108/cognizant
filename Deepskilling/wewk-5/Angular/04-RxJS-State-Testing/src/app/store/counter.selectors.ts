import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.reducer';

// Selectors are pure functions that read (and can derive/compute from) slices of the store.
// Components subscribe to selectors instead of reaching into the raw store shape directly.
export const selectCounterState = createFeatureSelector<CounterState>('counter');

export const selectCounterValue = createSelector(
  selectCounterState,
  (state) => state.value
);

export const selectIsPositive = createSelector(
  selectCounterValue,
  (value) => value > 0
);
