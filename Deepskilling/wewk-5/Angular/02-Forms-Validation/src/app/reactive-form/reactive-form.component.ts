import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordsMatchValidator, strongPasswordValidator } from '../validators/custom-validators';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent {
  // FormBuilder is the recommended way to construct FormGroup/FormControl/FormArray trees.
  signupForm = this.fb.group(
    {
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, strongPasswordValidator()]],
      confirmPassword: ['', Validators.required],
      // FormArray: a dynamic list of controls (here, phone numbers the user can add/remove).
      phoneNumbers: this.fb.array([this.fb.control('', Validators.required)])
    },
    { validators: passwordsMatchValidator() } // group-level (cross-field) custom validator
  );

  constructor(private fb: FormBuilder) {}

  get phoneNumbers(): FormArray {
    return this.signupForm.get('phoneNumbers') as FormArray;
  }

  addPhoneNumber(): void {
    this.phoneNumbers.push(this.fb.control('', Validators.required));
  }

  removePhoneNumber(index: number): void {
    this.phoneNumbers.removeAt(index);
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log('Reactive form submitted:', this.signupForm.value);
    } else {
      this.signupForm.markAllAsTouched(); // surface validation errors on unsubmitted fields
    }
  }
}
