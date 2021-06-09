import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigListComponent } from './component/config-list/config-list.component';
import { ConfigItemComponent } from './component/config-item/config-item.component';
import { ConfigPageComponent } from './component/config-page/config-page.component';
import { ConfigSideBarComponent } from './component/config-side-bar/config-side-bar.component';
import { ConfigPageHeaderComponent } from './component/config-page-header/config-page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigListComponent,
    ConfigItemComponent,
    ConfigPageComponent,
    ConfigSideBarComponent,
    ConfigPageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
