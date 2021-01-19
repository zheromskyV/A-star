import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { routes } from './core/constants/routes';
import { routerAnimationsForRoutes } from './core/constants/animations';

const appRoutes: Routes = [
  {
    path: routes.home,
    loadChildren: () => import('./home/home.module').then(({ HomeModule }) => HomeModule),
    data: { animation: routerAnimationsForRoutes[routes.home] },
  },
  {
    path: routes.algorithm,
    loadChildren: () => import('./a-star/a-star.module').then(({ AStarModule }) => AStarModule),
    data: { animation: routerAnimationsForRoutes[routes.algorithm] },
  },
  {
    path: routes.about,
    loadChildren: () => import('./about/about.module').then(({ AboutModule }) => AboutModule),
    data: { animation: routerAnimationsForRoutes[routes.about] },
  },
  {
    path: routes.contact,
    loadChildren: () => import('./contact/contact.module').then(({ ContactModule }) => ContactModule),
    data: { animation: routerAnimationsForRoutes[routes.contact] },
  },
  {
    path: routes.notFound,
    loadChildren: () => import('./not-found/not-found.module').then(({ NotFoundModule }) => NotFoundModule),
    data: { animation: routerAnimationsForRoutes[routes.notFound] },
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
