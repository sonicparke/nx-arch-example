import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoleManagementComponent } from './role-management/role-management.component';
import { App1RoleManagementListRolesModule } from '@nx-arch-example/app1/role-management/list-roles';

@NgModule({
  imports: [
    CommonModule,
    App1RoleManagementListRolesModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: RoleManagementComponent },
    ]),
  ],
  declarations: [RoleManagementComponent],
  exports: [RoleManagementComponent],
})
export class App1RoleManagementFeatureShellModule {}
