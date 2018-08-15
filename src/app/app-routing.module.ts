import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { ChampionPageComponent } from './champion-page/champion-page.component'
 
const routes: Routes = [
  { path: 'home', component: PageHomeComponent},
  { path: 'news-page', component: NewsPageComponent},
  { path: 'news-page/:id', component: ChampionPageComponent}
  // {path: 'guids', component: PageHomeComponent},
  // {path: 'tournaments', component: PageHomeComponent},
  // {path: 'teams', component: PageHomeComponent},
  // {path: 'rangs', component: PageHomeComponent},
  // {path: 'media', component: PageHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
