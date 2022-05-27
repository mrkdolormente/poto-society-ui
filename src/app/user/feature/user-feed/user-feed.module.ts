import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFeedRoutingModule } from './user-feed-routing.module';

import { UserFeedPage } from './user-feed.page';

import { UserPostCardModule } from '../../ui/user-post-card/user-post-card.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UserFeedPage],
  imports: [CommonModule, UserFeedRoutingModule, UserPostCardModule, SharedModule],
})
export class UserFeedModule {}
