import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'feed',
        loadChildren: () =>
          import('../feed/feed.module').then((m) => m.FeedPageModule),
      },
      {
        path: 'library',
        loadChildren: () =>
          import('../library/libary.module').then((m) => m.LibraryPageModule),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('../account/account.module').then((m) => m.AccountPageModule),
      },
      {
        path: '',
        redirectTo: '/feed',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
