import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ListUsersComponent],
  exports: [ListUsersComponent],
})
export class App1UserManagementListUsersModule {}
