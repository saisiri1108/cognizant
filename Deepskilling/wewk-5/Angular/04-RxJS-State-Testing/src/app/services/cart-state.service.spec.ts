import { TestBed } from '@angular/core/testing';
import { CartStateService } from './cart-state.service';

describe('CartStateService', () => {
  let service: CartStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with an empty cart', (done) => {
    service.cartItems$.subscribe((items) => {
      expect(items.length).toBe(0);
      done();
    });
  });

  it('should add a new item to the cart', (done) => {
    service.addItem({ productId: 1, name: 'Mouse', quantity: 2 });

    service.cartItems$.subscribe((items) => {
      expect(items.length).toBe(1);
      expect(items[0].name).toBe('Mouse');
      expect(items[0].quantity).toBe(2);
      done();
    });
  });

  it('should increase quantity when the same product is added again', (done) => {
    service.addItem({ productId: 1, name: 'Mouse', quantity: 2 });
    service.addItem({ productId: 1, name: 'Mouse', quantity: 3 });

    service.cartItems$.subscribe((items) => {
      expect(items.length).toBe(1);
      expect(items[0].quantity).toBe(5);
      done();
    });
  });

  it('should remove an item by productId', (done) => {
    service.addItem({ productId: 1, name: 'Mouse', quantity: 1 });
    service.removeItem(1);

    service.cartItems$.subscribe((items) => {
      expect(items.length).toBe(0);
      done();
    });
  });

  it('should compute totalItemCount across all items', () => {
    service.addItem({ productId: 1, name: 'Mouse', quantity: 2 });
    service.addItem({ productId: 2, name: 'Keyboard', quantity: 1 });

    expect(service.totalItemCount).toBe(3);
  });
});
