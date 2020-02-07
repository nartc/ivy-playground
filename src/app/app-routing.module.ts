import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpressionChangedComponent } from './expression-changed/expression-changed.component';


const routes: Routes = [
  { path: '', component: ExpressionChangedComponent },
  { path: 'a', loadChildren: () => import('./provided-in-any/module-a/module-a.module').then(m => m.ModuleAModule) },
  { path: 'b', loadChildren: () => import('./provided-in-any/module-b/module-b.module').then(m => m.ModuleBModule) },
  { path: 'lazy', loadChildren: () => import('./lazy-load/lazy-load.module').then(m => m.LazyLoadModule) },
  { path: 'style-binding', loadChildren: () => import('./style-binding/style-binding.module').then(m => m.StyleBindingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
