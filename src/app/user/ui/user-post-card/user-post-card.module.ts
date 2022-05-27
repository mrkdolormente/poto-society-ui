import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPostCardComponent } from './user-post-card.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UserPostCardComponent],
  imports: [CommonModule, SharedModule],
  exports: [UserPostCardComponent],
})
export class UserPostCardModule {}
