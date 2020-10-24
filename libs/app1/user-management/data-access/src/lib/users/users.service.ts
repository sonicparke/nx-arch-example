import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  public getUsers(): string[] {
    return ['mike', 'steve'];
  }
}
