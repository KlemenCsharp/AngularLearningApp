import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'animations',
    loadChildren: () => import('./features/animations/animations.module').then(m => m.AnimationsModule)
  },
  {
    path: 'javascript',
    loadChildren: () => import('./features/javascript/javascript.module').then(m => m.JavascriptModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
