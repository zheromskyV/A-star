import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutRoutingModule } from './about-routing.module';

import { AboutPageComponent } from './pages/about-page/about-page.component';

@NgModule({
  declarations: [AboutPageComponent],
  imports: [CommonModule, RouterModule, AboutRoutingModule],
})
export class AboutModule {}
