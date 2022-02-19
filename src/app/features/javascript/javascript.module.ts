import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptRoutingModule } from './javascript-routing.module';
import { PageJavascriptComponent } from './page-javascript/page-javascript.component';
import { JavascriptDatesComponent } from './page-javascript/javascript-dates/javascript-dates.component';
import { JavascriptAsyncAwaitComponent } from './page-javascript/javascript-async-await/javascript-async-await.component';


@NgModule({
  declarations: [
    PageJavascriptComponent,
    JavascriptDatesComponent,
    JavascriptAsyncAwaitComponent
  ],
  imports: [
    CommonModule,
    JavascriptRoutingModule
  ]
})
export class JavascriptModule { }
