import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Movies } from './movies.model';


import { MOVIESDBZN } from '../app.api'
import { Observable } from 'rxjs';

@Injectable()
export class MoviesService {

  constructor(private http: HttpClient) { }

  movies(): Observable<Movies[]> {
    return this.http.get<Movies[]>(`${MOVIESDBZN}/anime`)
  }

}
