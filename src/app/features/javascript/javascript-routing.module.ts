import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageJavascriptComponent} from "./page-javascript/page-javascript.component";

const routes: Routes = [
  {
    path: '',
    component: PageJavascriptComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
