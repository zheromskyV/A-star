import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';

import { routes } from '../core/constants/routes';

const homeRoutes: Routes = [
  {
    path: routes.home,
    component: LandingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
