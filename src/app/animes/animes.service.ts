import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Animes } from './animes.model';

import { MOVIESDBZN } from '../app.api'
import { Observable } from 'rxjs';

@Injectable()
export class AnimesService {

  constructor(private http: HttpClient) { }

  animes(): Observable<Animes[]> {
    return this.http.get<Animes[]>(`${MOVIESDBZN}/anime`)
  }

}
