import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { CartStateService } from '../services/cart-state.service';
import { decrement, increment, loadCounter, reset } from '../store/counter.actions';
import { selectCounterValue, selectIsPositive } from '../store/counter.selectors';

@Component({
  selector: 'app-state-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './state-demo.component.html'
})
export class StateDemoComponent {
  // ---- Service-based state (BehaviorSubject) ----
  cartItems$ = this.cartState.cartItems$;

  // ---- NgRx store state ----
  counterValue$ = this.store.select(selectCounterValue);
  isPositive$ = this.store.select(selectIsPositive);

  constructor(
    private cartState: CartStateService,
    private store: Store
  ) {}

  addToCart(): void {
    this.cartState.addItem({ productId: 1, name: 'Wireless Mouse', quantity: 1 });
  }

  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }

  reset(): void {
    this.store.dispatch(reset());
  }

  loadFromServer(): void {
    // Dispatches an action that CounterEffects listens for and turns into a side effect.
    this.store.dispatch(loadCounter());
  }
}
