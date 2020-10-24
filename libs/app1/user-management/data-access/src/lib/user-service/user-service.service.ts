import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor() {}

  public getUsers(): string[] {
    return ['mike', 'steve'];
  }
}
