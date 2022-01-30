import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PageAnimationsComponent} from "./page-animations/page-animations.component";

const routes: Routes = [
  {
    path: '',
    component: PageAnimationsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationsRoutingModule {}
