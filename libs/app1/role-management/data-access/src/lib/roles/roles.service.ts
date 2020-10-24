import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  public getRoles(): string[] {
    return ['admin', 'user'];
  }
}
