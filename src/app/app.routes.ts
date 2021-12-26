import { Routes } from '@angular/router'
import { AnimesComponent } from './animes/animes.component'


import { HomeComponent } from './home/home.component'
import { MoviesComponent } from './movies/movies.component'


export const ROUTES: Routes = [
  {path: "", component: HomeComponent},
  {path: "animes", component: AnimesComponent},
  {path: "movies", component: MoviesComponent}
]
