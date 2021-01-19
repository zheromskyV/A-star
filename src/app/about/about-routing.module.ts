import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPageComponent } from './pages/about-page/about-page.component';

import { routes } from '../core/constants/routes';

const aboutRoutes: Routes = [
  {
    path: routes.home,
    component: AboutPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(aboutRoutes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
