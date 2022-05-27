import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'feed',
    loadChildren: () => import('../user-feed/user-feed.module').then((m) => m.UserFeedModule),
  },
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserShellRoutingModule {}
