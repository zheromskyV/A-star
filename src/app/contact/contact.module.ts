import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContactRoutingModule } from './contact-routing.module';

import { ContactPageComponent } from './pages/contact-page/contact-page.component';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [CommonModule, RouterModule, ContactRoutingModule],
})
export class ContactModule {}
