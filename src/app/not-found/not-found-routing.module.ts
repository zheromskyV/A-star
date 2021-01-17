import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

import { routes } from '../core/constants/routes';

const notFoundRoutes: Routes = [
  {
    path: routes.home,
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(notFoundRoutes)],
  exports: [RouterModule],
})
export class NotFoundRoutingModule {}
