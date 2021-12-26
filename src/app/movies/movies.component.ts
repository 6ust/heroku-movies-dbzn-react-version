import { Component, OnInit } from '@angular/core';
import {Movies} from './movies.model';
import { MoviesService } from './movies.service';

@Component({
  selector: 'dbzn-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {

  movies: Movies[] = []

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.movies().subscribe(movies => this.movies = movies)
  }

}
