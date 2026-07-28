import { createReducer, on } from '@ngrx/store';
import { decrement, increment, loadCounterSuccess, reset } from './counter.actions';

export interface CounterState {
  value: number;
}

export const initialState: CounterState = { value: 0 };

// A reducer is a pure function: (currentState, action) -> newState.
// It never mutates state directly - always returns a new object.
export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, value: state.value + 1 })),
  on(decrement, (state) => ({ ...state, value: state.value - 1 })),
  on(reset, (state) => ({ ...state, value: 0 })),
  on(loadCounterSuccess, (state, { value }) => ({ ...state, value }))
);
