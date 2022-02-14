import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptRoutingModule } from './javascript-routing.module';
import { PageJavascriptComponent } from './page-javascript/page-javascript.component';


@NgModule({
  declarations: [
    PageJavascriptComponent
  ],
  imports: [
    CommonModule,
    JavascriptRoutingModule
  ]
})
export class JavascriptModule { }
