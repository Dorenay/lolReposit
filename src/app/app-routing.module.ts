import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';

const routes: Routes = [
  {path: 'home', component: PageHomeComponent},
  // {path: 'news', component: PageHomeComponent},
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