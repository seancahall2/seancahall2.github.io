import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextSearchComponent } from './text-search/text-search.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CitationComponent } from './citation/citation.component';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
@NgModule({
  declarations: [
    AppComponent,
    TextSearchComponent,
    SideBarComponent,
    HomeComponent,
    AboutComponent,
    CitationComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
