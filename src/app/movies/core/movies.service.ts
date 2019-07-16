import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { moviesResponse } from './movies-contracts';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private getSearchMovies = 'http://www.omdbapi.com/?i=tt3896198&apikey=830b1a86&type=movie&s=';

  constructor(private http: HttpClient) { }

  searchMovies(searchText: string): Observable<moviesResponse> {
    return this.http.get<moviesResponse>(`${this.getSearchMovies}${searchText}`);
  }
}
