import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  constructor() {}

  public getRoles(): string[] {
    return ['admin', 'user'];
  }
}
