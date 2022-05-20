import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { ShHeaderModule } from 'src/app/shared/ui/sh-header/sh-header.module';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, HomeRoutingModule, ShHeaderModule],
})
export class HomeModule {}
