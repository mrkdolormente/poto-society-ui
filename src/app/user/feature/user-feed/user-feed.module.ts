import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFeedRoutingModule } from './user-feed-routing.module';

import { UserFeedPage } from './user-feed.page';

import { ShHeaderModule } from 'src/app/shared/ui/sh-header/sh-header.module';
import { ShContainerModule } from 'src/app/shared/ui/sh-container/sh-container.module';
import { UserPostCardModule } from '../../ui/user-post-card/user-post-card.module';

@NgModule({
  declarations: [UserFeedPage],
  imports: [
    CommonModule,
    UserFeedRoutingModule,
    UserPostCardModule,
    ShHeaderModule,
    ShContainerModule,
  ],
})
export class UserFeedModule {}
