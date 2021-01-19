import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AStarRoutingModule } from './a-star-routing.module';

import { AStarPageComponent } from './pages/a-star-page/a-star-page.component';

@NgModule({
  declarations: [AStarPageComponent],
  imports: [CommonModule, RouterModule, AStarRoutingModule],
})
export class AStarModule {}
