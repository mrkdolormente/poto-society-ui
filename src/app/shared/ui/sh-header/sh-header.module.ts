import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { ShHeaderComponent } from './sh-header.component';

@NgModule({
  declarations: [ShHeaderComponent],
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatIconModule],
  exports: [ShHeaderComponent],
})
export class ShHeaderModule {}
