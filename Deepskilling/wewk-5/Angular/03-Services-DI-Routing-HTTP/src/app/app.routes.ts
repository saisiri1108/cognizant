import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { authGuard } from './guards/auth.guard';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';
import { userResolver } from './resolvers/user.resolver';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  // Route parameter (:id) + Resolve guard (pre-fetches the user) + CanDeactivate guard
  {
    path: 'users/:id',
    component: UserDetailComponent,
    resolve: { user: userResolver },
    canDeactivate: [unsavedChangesGuard],
    canActivate: [authGuard]
  },

  // Lazy loading: this feature's code/route config is only fetched when the user
  // navigates to /reports, instead of being part of the initial bundle.
  {
    path: 'reports',
    loadChildren: () => import('./pages/lazy-reports/reports.routes').then((m) => m.REPORTS_ROUTES)
  }
];
