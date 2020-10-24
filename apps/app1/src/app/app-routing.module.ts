import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@nx-arch-example/app1/home/feature-shell').then(
        (module) => module.App1HomeFeatureShellModule
      ),
  },
  {
    path: 'user-management',
    loadChildren: () =>
      import('@nx-arch-example/app1/users/feature-shell').then(
        (module) => module.App1UserManagementFeatureShellModule
      ),
  },
  {
    path: 'role-management',
    loadChildren: () =>
      import('@nx-arch-example/app1/role-management/feature-shell').then(
        (module) => module.App1RoleManagementFeatureShellModule
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
