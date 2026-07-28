import { Injectable } from '@angular/core';

// NOT providedIn: 'root'. Instead, this is registered in a component's `providers`
// array (see HomeComponent), so Angular creates a SEPARATE instance per component
// subtree - this is hierarchical DI: root vs module vs component-level injectors.
@Injectable()
export class CounterService {
  private count = 0;

  increment(): number {
    return ++this.count;
  }

  reset(): void {
    this.count = 0;
  }

  get value(): number {
    return this.count;
  }
}
