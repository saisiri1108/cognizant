import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Custom validator: password must contain at least one digit and one uppercase letter.
// Custom validators plug into FormControl/FormGroup exactly like built-in ones (Validators.required etc.)
export function strongPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value || '';
    const hasDigit = /\d/.test(value);
    const hasUpper = /[A-Z]/.test(value);

    if (!value) return null; // let `required` handle the empty case

    return hasDigit && hasUpper ? null : { weakPassword: true };
  };
}

// Cross-field custom validator, applied at the FormGroup level.
export function passwordsMatchValidator(): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  };
}
