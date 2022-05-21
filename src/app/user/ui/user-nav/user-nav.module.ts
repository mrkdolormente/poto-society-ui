import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavComponent } from './user-nav.component';
import { ShSidenavModule } from 'src/app/shared/ui/sh-sidenav/sh-sidenav.module';
import { ShHeaderModule } from 'src/app/shared/ui/sh-header/sh-header.module';

@NgModule({
  declarations: [UserNavComponent],
  imports: [CommonModule, ShHeaderModule, ShSidenavModule],
  exports: [UserNavComponent],
})
export class UserNavModule {}
