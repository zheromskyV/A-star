import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageContainerComponent } from './components/page-container/page-container.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [PageContainerComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [PageContainerComponent],
})
export class CoreModule {}
