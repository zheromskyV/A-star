import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, RouterModule, HomeRoutingModule],
})
export class HomeModule {}
