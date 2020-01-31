import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { MovieModel } from '../../models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private movies: MovieModel[] = [];

  constructor(private movieService: MovieService) {
    this.getTrendingMovies();
  }

  ngOnInit() {}

  async getTrendingMovies(): Promise<void> {
    this.movies = await this.movieService.getTrending().toPromise();
  }
}
