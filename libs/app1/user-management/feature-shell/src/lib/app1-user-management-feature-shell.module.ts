import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserManagementComponent } from './user-management/user-management.component';
import { App1UserManagementListUsersModule } from '@nx-arch-example/app1/user-management/list-users';

@NgModule({
  imports: [
    CommonModule,
    App1UserManagementListUsersModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: UserManagementComponent },
    ]),
  ],
  declarations: [UserManagementComponent],
  exports: [UserManagementComponent],
})
export class App1UserManagementFeatureShellModule {}
