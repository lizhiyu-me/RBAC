import { mainRoutes } from './../../environments/routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { CrumbComponent } from './crumb/crumb.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    IndexComponent,
    ContentComponent,
    CrumbComponent,
    HeaderComponent,
    SidebarComponent,
    TabsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: IndexComponent,
        children: mainRoutes
      },
    ]),
  ],
  exports: [RouterModule],
})
export class IndexModule { }