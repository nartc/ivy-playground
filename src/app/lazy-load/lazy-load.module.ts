import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadContainerComponent } from './lazy-load-container.component';

const routes: Routes = [
  { path: '', component: LazyLoadContainerComponent }
];

@NgModule({
  declarations: [LazyLoadContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule
  ]
})
export class LazyLoadModule {
}
