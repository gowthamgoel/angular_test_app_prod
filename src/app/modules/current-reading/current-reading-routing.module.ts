import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentReadingComponent } from './current-reading.component';

const routes: Routes = [
  {
    path: '',
    component: CurrentReadingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentReadingRoutingModule { }
