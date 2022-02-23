import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptRoutingModule } from './javascript-routing.module';
import { PageJavascriptComponent } from './page-javascript/page-javascript.component';
import { JavascriptDatesComponent } from './page-javascript/javascript-dates/javascript-dates.component';
import { JavascriptAsyncAwaitComponent } from './page-javascript/javascript-async-await/javascript-async-await.component';
import { JavascriptElementComponent } from './page-javascript/javascript-element/javascript-element.component';


@NgModule({
  declarations: [
    PageJavascriptComponent,
    JavascriptDatesComponent,
    JavascriptAsyncAwaitComponent,
    JavascriptElementComponent
  ],
  imports: [
    CommonModule,
    JavascriptRoutingModule
  ]
})
export class JavascriptModule { }
