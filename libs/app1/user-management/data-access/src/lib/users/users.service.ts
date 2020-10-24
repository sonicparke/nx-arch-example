import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public getUsers(): string[] {
    return ['mike', 'steve'];
  }
}
