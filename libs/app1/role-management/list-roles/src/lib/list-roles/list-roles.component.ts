import { Component, OnInit } from '@angular/core';
import { RolesService } from '@nx-arch-example/app1/role-management/data-access';
import { DateService } from '@nx-arch-example/shared/utils';

@Component({
  selector: 'nx-arch-example-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.scss'],
})
export class ListRolesComponent implements OnInit {
  public roles: string[];
  public date: string;
  constructor(
    private roleService: RolesService,
    private dateService: DateService
  ) {}

  ngOnInit(): void {
    this.roles = this.roleService.getRoles();
    this.date = this.dateService.getCurrentDate();
  }
}
