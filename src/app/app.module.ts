import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnimesComponent } from './animes/animes.component';
import { MoviesComponent } from './movies/movies.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { AnimesService } from './animes/animes.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimesComponent,
    MoviesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AnimesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
