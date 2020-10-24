# NxArchExample

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Commands run to create this type of structure:

## App1

### Routing

`nx g m app-routing --flat --project=app1`

### User Management

`nx g @nrwl/angular:lib feature-shell --style=scss --routing --lazy --parentModule=/apps/app1/src/app/app.module.ts --publishable --importPath="@nx-arch-example/app1/users/feature-shell" --directory=app1/user-management`

`nx g component user-management --style=scss --export --project=app1-user-management-feature-shell`

`nx g @nrwl/angular:lib data-access --directory=app1/user-management --publishable --style=scss --importPath="@nx-arch-example/app1/user-management/data-access"`

`nx g service users --project=app1-user-management-data-access --flat=false`

`nx g @nrwl/angular:lib list-users --directory=app1/user-management --publishable --style=scss --importPath="@nx-arch-example/app1/user-management/list-users"`

`nx g component list-users --style=scss --export --project=app1-user-management-list-users`

### Role Management

`nx g @nrwl/angular:lib feature-shell --style=scss --routing --lazy --parentModule=/apps/app1/src/app/app.module.ts --publishable --importPath="@nx-arch-example/app1/role-management/feature-shell" --directory=app1/role-management`

`nx g component role-management --style=scss --export --project=app1-role-management-feature-shell`

`nx g @nrwl/angular:lib data-access --directory=app1/role-management --publishable --style=scss --importPath="@nx-arch-example/app1/role-management/data-access"`

`nx g service roles --project=app1-role-management-data-access --flat=false`

`nx g @nrwl/angular:lib list-roles --directory=app1/role-management --publishable --style=scss --importPath="@nx-arch-example/app1/role-management/list-roles"`

`nx g component list-roles --style=scss --export --project=app1-role-management-list-roles`

### Home

`nx g @nrwl/angular:lib feature-shell --style=scss --routing --lazy --parentModule=/apps/app1/src/app/app.module.ts --publishable --importPath="@nx-arch-example/app1/home/feature-shell" --directory=app1/home`

`nx g component home --style=scss --export --project=app1-home-feature-shell`

## App2

### Routing

`nx g m app-routing --flat --project=app2`

### Home

`nx g @nrwl/angular:lib feature-shell --style=scss --routing --lazy --parentModule=/apps/app2/src/app/app.module.ts --publishable --importPath="@nx-arch-example/app2/home/feature-shell" --directory=app2/home`

`nx g component home --style=scss --export --project=app2-home-feature-shell`

## Shared

### Shared Utils

`nx g @nrwl/angular:lib utils --directory=shared --publishable --importPath="@nx-arch-example/shared/utils" --style=scss`

`nx g service date --project=shared-utils --flat=false`

### Share UI

`nx g @nrwl/angular:lib ui --directory=shared --publishable --importPath="@nx-arch-example/shared/ui" --style=scss`

`nx g c hello --project=shared-ui --style=scss --export`
