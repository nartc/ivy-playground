import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InheritanceContainerComponent } from './inheritance-container.component';

const routes: Routes = [
  { path: '', component: InheritanceContainerComponent }
];

@NgModule({
  declarations: [InheritanceContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InheritanceModule {
}
