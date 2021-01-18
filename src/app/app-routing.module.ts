import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { routes } from './core/constants/routes';

const appRoutes: Routes = [
  {
    path: routes.home,
    loadChildren: () => import('./home/home.module').then(({ HomeModule }) => HomeModule),
  },
  {
    path: routes.notFound,
    loadChildren: () => import('./not-found/not-found.module').then(({ NotFoundModule }) => NotFoundModule),
  },
  {
    path: '**',
    redirectTo: routes.notFound,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
