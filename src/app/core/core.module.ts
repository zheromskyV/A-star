import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageContainerComponent } from './components/page-container/page-container.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [PageContainerComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [PageContainerComponent],
})
export class CoreModule {}
