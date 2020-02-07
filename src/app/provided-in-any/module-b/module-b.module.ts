import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleBComponent } from './module-b.component';

const routes: Routes = [
  { path: '', component: ModuleBComponent }
];

@NgModule({
  declarations: [ModuleBComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class ModuleBModule {
}
