import { Component } from '@angular/core';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { StateDemoComponent } from './state-demo/state-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RxjsDemoComponent, StateDemoComponent],
  template: `
    <h1>RxJS, State Management &amp; Testing Demo</h1>
    <app-rxjs-demo></app-rxjs-demo>
    <hr />
    <app-state-demo></app-state-demo>
  `
})
export class AppComponent {}
