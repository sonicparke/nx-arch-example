import { Component, OnInit } from '@angular/core';
import { UsersService } from '@nx-arch-example/app1/user-management/data-access';

@Component({
  selector: 'nx-arch-example-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  public users: string[];
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
}
