import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-arch-example-formatter',
  templateUrl: './formatter.component.html',
  styleUrls: ['./formatter.component.scss'],
})
export class FormatterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public formatDate(date?: Date): string {
    return 'formatted date';
  }
}
