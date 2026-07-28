import { Component } from '@angular/core';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TemplateFormComponent, ReactiveFormComponent],
  template: `
    <h1>Angular Forms Demo</h1>
    <app-template-form></app-template-form>
    <hr />
    <app-reactive-form></app-reactive-form>
  `
})
export class AppComponent {}
