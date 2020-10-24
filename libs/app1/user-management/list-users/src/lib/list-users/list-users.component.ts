import { Component, OnInit } from '@angular/core';
import { UsersService } from '@nx-arch-example/app1/user-management/data-access';
import { DateService } from '@nx-arch-example/shared/utils';

@Component({
  selector: 'nx-arch-example-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  public users: string[];
  public date: string;
  constructor(
    private userService: UsersService,
    private dateService: DateService
  ) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.date = this.dateService.getCurrentDate();
  }
}
