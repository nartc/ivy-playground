import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StyleBindingComponent } from './style-binding.component';

const routes: Routes = [
  { path: '', component: StyleBindingComponent }
];

@NgModule({
  declarations: [StyleBindingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StyleBindingModule {
}
