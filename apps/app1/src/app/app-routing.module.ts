import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-management',
    pathMatch: 'full',
    data: { allowIfAuthenticated: false },
  },
  {
    path: 'user-management',
    data: { allowIfAuthenticated: false },
    loadChildren: () =>
      import('@nx-arch-example/app1/users/feature-shell').then(
        (module) => module.App1UserManagementFeatureShellModule
      ),
  },
  {
    path: '**',
    redirectTo: 'user-management',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
