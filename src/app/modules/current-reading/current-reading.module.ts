import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentReadingRoutingModule } from './current-reading-routing.module';
import { CurrentReadingComponent } from './current-reading.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CurrentReadingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CurrentReadingRoutingModule
  ]
})
export class CurrentReadingModule { }
