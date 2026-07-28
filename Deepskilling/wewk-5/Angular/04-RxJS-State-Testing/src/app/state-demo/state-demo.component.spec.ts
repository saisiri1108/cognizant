import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideStore } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { StateDemoComponent } from './state-demo.component';
import { counterReducer } from '../store/counter.reducer';
import { selectCounterValue } from '../store/counter.selectors';

describe('StateDemoComponent', () => {
  let component: StateDemoComponent;
  let fixture: ComponentFixture<StateDemoComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateDemoComponent],
      providers: [provideStore({ counter: counterReducer })]
    }).compileComponents();

    fixture = TestBed.createComponent(StateDemoComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch increment and update the store value', (done) => {
    component.increment();

    store.select(selectCounterValue).subscribe((value) => {
      expect(value).toBe(1);
      done();
    });
  });

  it('should dispatch reset and bring the counter back to 0', (done) => {
    component.increment();
    component.increment();
    component.reset();

    store.select(selectCounterValue).subscribe((value) => {
      expect(value).toBe(0);
      done();
    });
  });

  it('should add an item to the cart when addToCart is called', (done) => {
    component.addToCart();

    component.cartItems$.subscribe((items) => {
      expect(items.some((i) => i.name === 'Wireless Mouse')).toBeTrue();
      done();
    });
  });
});
