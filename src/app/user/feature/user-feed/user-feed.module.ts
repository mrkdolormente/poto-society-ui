import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFeedRoutingModule } from './user-feed-routing.module';

import { UserFeedPage } from './user-feed.page';
import { UserNavModule } from '../../ui/user-nav/user-nav.module';

@NgModule({
  declarations: [UserFeedPage],
  imports: [CommonModule, UserFeedRoutingModule, UserNavModule],
})
export class UserFeedModule {}
