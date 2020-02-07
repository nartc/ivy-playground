import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleAComponent } from './module-a.component';

const routes: Routes = [
  { path: '', component: ModuleAComponent }
];

@NgModule({
  declarations: [ModuleAComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class ModuleAModule {
}
