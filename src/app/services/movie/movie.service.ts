import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { MovieModel } from '../../models/movie.model';
import { BASE_URL_MOVIES, API_KEY } from './../../../../src/app/config/index';
import { map } from 'rxjs/operators';
import { BASE_URL_IMAGES } from '../../config/index';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private TRENDING_URL = `/trending/all/week?api_key=${API_KEY}&language=en-US`;

  constructor(private http: HttpClient) {}

  getTrending(): Observable<MovieModel[]> {
    return this.http.get(`${BASE_URL_MOVIES}${this.TRENDING_URL}`).pipe(
      map(data => {
        const movies = new Array<MovieModel>();
        ((data as any).results as any[]).map(result => {
          const model = new MovieModel(
            result.id,
            result.video,
            result.vote_count,
            result.vote_average,
            result.title,
            new Date(result.release_date),
            result.original_language,
            result.original_title,
            result.genre_ids,
            result.backdrop_path,
            result.adult,
            result.overview,
            `${BASE_URL_IMAGES}${result.poster_path}`,
            result.popularity,
            result.media_type
          );
          movies.push(model);
        });

        return movies;
      })
    );
  }
}
