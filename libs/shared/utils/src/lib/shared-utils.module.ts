import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatterComponent } from './formatter/formatter.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FormatterComponent],
  exports: [FormatterComponent],
})
export class SharedUtilsModule {}
