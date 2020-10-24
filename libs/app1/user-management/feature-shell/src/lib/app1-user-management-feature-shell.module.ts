import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserManagementComponent } from './user-management/user-management.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: UserManagementComponent },
    ]),
  ],
  declarations: [UserManagementComponent],
  exports: [UserManagementComponent],
})
export class App1UserManagementFeatureShellModule {}
