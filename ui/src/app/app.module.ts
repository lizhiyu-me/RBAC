import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContentComponent } from 'src/layout/index/content/content.component';
import { CrumbComponent } from 'src/layout/index/crumb/crumb.component';
import { HeaderComponent } from 'src/layout/index/header/header.component';
import { SidebarComponent } from 'src/layout/index/sidebar/sidebar.component';
import { TabsComponent } from 'src/layout/index/tabs/tabs.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
