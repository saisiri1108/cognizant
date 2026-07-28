import { CanDeactivateFn } from '@angular/router';

// Any component used with this guard must implement hasUnsavedChanges().
export interface CanComponentDeactivate {
  hasUnsavedChanges(): boolean;
}

// Runs BEFORE the router navigates away from the current route -
// lets the user cancel navigation if they'd lose unsaved work.
export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> = (component) => {
  if (component.hasUnsavedChanges()) {
    return confirm('You have unsaved changes. Leave this page anyway?');
  }
  return true;
};
