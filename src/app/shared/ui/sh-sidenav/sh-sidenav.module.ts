import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';

import { ShSidenavComponent } from './sh-sidenav.component';

@NgModule({
  declarations: [ShSidenavComponent],
  imports: [CommonModule, MatSidenavModule],
  exports: [ShSidenavComponent],
})
export class ShSidenavModule {}
