import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form.component.html'
})
export class TemplateFormComponent {
  model = {
    name: '',
    email: '',
    age: null as number | null
  };

  submitted = false;

  // Template-driven forms validate declaratively via directives (required, minlength, etc.)
  // in the HTML; the form's overall validity is exposed through the NgForm reference (#form="ngForm").
  onSubmit(form: NgForm): void {
    this.submitted = true;
    if (form.valid) {
      console.log('Template-driven form submitted:', this.model);
    }
  }
}
