import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DataService, User } from '../services/data.service';

// Runs BEFORE the route's component is created, and the component receives the
// already-loaded data via ActivatedRoute - avoids a "loading..." flash inside the component itself.
export const userResolver: ResolveFn<User> = (route) => {
  const dataService = inject(DataService);
  const id = Number(route.paramMap.get('id'));
  return dataService.getUserById(id);
};
