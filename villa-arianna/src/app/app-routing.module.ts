import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextSearchComponent } from './text-search/text-search.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CitationComponent } from './citation/citation.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'home', component: HomeComponent
    },
    {
      path: 'about', component: AboutComponent
    },
    {
      path: 'citation', component: CitationComponent
    },
    {
      path: 'tag-search', component: TextSearchComponent
    },
    {
      path: 'free-text-search', component: TextSearchComponent
    },
    {
      path: 'room-detail', component: RoomDetailComponent
    },
    {
      path: '', redirectTo: '/home', pathMatch: 'full'
    },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
