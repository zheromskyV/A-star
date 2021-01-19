import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactPageComponent } from './pages/contact-page/contact-page.component';

import { routes } from '../core/constants/routes';

const contactRoutes: Routes = [
  {
    path: routes.home,
    component: ContactPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(contactRoutes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
