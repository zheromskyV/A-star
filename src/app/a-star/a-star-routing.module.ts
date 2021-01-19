import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AStarPageComponent } from './pages/a-star-page/a-star-page.component';

import { routes } from '../core/constants/routes';

const aStarRoutes: Routes = [
  {
    path: routes.home,
    component: AStarPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(aStarRoutes)],
  exports: [RouterModule],
})
export class AStarRoutingModule {}
