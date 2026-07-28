import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Subject,
  catchError,
  filter,
  from,
  map,
  mergeMap,
  of,
  Subscription,
  switchMap,
  timer
} from 'rxjs';

@Component({
  selector: 'app-rxjs-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-demo.component.html'
})
export class RxjsDemoComponent implements OnInit, OnDestroy {
  mapFilterResult: number[] = [];
  switchMapResult: string[] = [];
  mergeMapResult: string[] = [];
  errorResult = '';

  // A Subject is both an Observable and an Observer - used here to simulate
  // a stream of user search input events.
  private searchTerms = new Subject<string>();
  private subscriptions = new Subscription();

  ngOnInit(): void {
    // ---- map + filter ----
    // Emits 1..10, keeps only even numbers, then doubles them.
    const mapFilterSub = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      .pipe(
        filter((n) => n % 2 === 0),
        map((n) => n * 2)
      )
      .subscribe((n) => this.mapFilterResult.push(n));

    // ---- switchMap ----
    // Simulates a "type-ahead search": every new emission on searchTerms CANCELS
    // any in-flight "request" from the previous term and switches to the new one.
    const switchMapSub = this.searchTerms
      .pipe(
        switchMap((term) => this.fakeSearchApi(term))
      )
      .subscribe((results) => (this.switchMapResult = results));

    // ---- mergeMap ----
    // Unlike switchMap, mergeMap runs all inner observables CONCURRENTLY and merges
    // their results as they arrive - useful when requests are independent of each other.
    const mergeMapSub = from(['A', 'B', 'C'])
      .pipe(mergeMap((id) => this.fakeFetchById(id)))
      .subscribe((result) => this.mergeMapResult.push(result));

    // ---- catchError ----
    const errorSub = this.fakeFailingCall()
      .pipe(
        catchError((err) => {
          this.errorResult = `Recovered from error: ${err.message}`;
          return of('fallback value');
        })
      )
      .subscribe();

    this.subscriptions.add(mapFilterSub);
    this.subscriptions.add(switchMapSub);
    this.subscriptions.add(mergeMapSub);
    this.subscriptions.add(errorSub);

    // Trigger the switchMap demo with two rapid searches - only "angular" should win.
    this.searchTerms.next('ang');
    this.searchTerms.next('angular');
  }

  ngOnDestroy(): void {
    // Prevents memory leaks - always unsubscribe from long-lived subscriptions.
    this.subscriptions.unsubscribe();
  }

  private fakeSearchApi(term: string) {
    return timer(200).pipe(map(() => [`${term} result 1`, `${term} result 2`]));
  }

  private fakeFetchById(id: string) {
    return timer(Math.random() * 300).pipe(map(() => `Fetched item ${id}`));
  }

  private fakeFailingCall() {
    return timer(100).pipe(
      map(() => {
        throw new Error('Simulated network failure');
      })
    );
  }
}
