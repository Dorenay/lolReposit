import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { NewsComponent } from './news/news.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { ChampionPageComponent } from './champion-page/champion-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageHomeComponent,
    NewsComponent,
    NewsPageComponent,
    ChampionPageComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
