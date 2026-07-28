import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface CartItem {
  productId: number;
  name: string;
  quantity: number;
}

// The simplest form of Angular state management: a service holding state in a
// BehaviorSubject (so late subscribers immediately get the current value), exposing
// it as a read-only Observable, and only mutating it through explicit methods.
@Injectable({ providedIn: 'root' })
export class CartStateService {
  private readonly cartItems$$ = new BehaviorSubject<CartItem[]>([]);

  // Expose as Observable (not the Subject itself) so consumers can't call .next() directly -
  // all state changes must go through the methods below.
  readonly cartItems$: Observable<CartItem[]> = this.cartItems$$.asObservable();

  addItem(item: CartItem): void {
    const current = this.cartItems$$.value;
    const existing = current.find((i) => i.productId === item.productId);

    const updated = existing
      ? current.map((i) => (i.productId === item.productId ? { ...i, quantity: i.quantity + item.quantity } : i))
      : [...current, item];

    this.cartItems$$.next(updated);
  }

  removeItem(productId: number): void {
    this.cartItems$$.next(this.cartItems$$.value.filter((i) => i.productId !== productId));
  }

  get totalItemCount(): number {
    return this.cartItems$$.value.reduce((sum, i) => sum + i.quantity, 0);
  }
}
