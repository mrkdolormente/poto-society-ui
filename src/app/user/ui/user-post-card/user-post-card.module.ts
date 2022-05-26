import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPostCardComponent } from './user-post-card.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [UserPostCardComponent],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule],
  exports: [UserPostCardComponent],
})
export class UserPostCardModule {}
