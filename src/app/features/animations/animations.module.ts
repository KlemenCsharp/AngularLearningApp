import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AnimationsRoutingModule} from "./animations.routing.module";
import {PageAnimationsComponent} from "./page-animations/page-animations.component";



@NgModule({
  declarations: [PageAnimationsComponent],
  imports: [
    CommonModule,
    AnimationsRoutingModule
  ]
})
export class AnimationsModule { }
