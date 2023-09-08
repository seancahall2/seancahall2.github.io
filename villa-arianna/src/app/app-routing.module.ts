import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextSearchComponent } from './text-search/text-search.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CitationComponent } from './citation/citation.component';

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
      path: 'tag-search/:tag', component: TextSearchComponent
    },
    {
      path: 'free-text-search/:searchTerm', component: TextSearchComponent
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `home`
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
