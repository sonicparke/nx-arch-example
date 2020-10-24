import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nx-arch-example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'app1';
}
