import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { counterReducer } from './store/counter.reducer';
import { CounterEffects } from './store/counter.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({ counter: counterReducer }),
    provideEffects([CounterEffects])
  ]
};
