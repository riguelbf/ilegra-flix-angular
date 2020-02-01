import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { MovieModel } from '../../models/movie.model';
import { log } from 'util';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private movies: MovieModel[] = [];
  public showModal = false;
  public movieSelected: MovieModel;

  constructor(private movieService: MovieService) {
    this.getTrendingMovies();
  }

  ngOnInit() {}

  async getTrendingMovies(): Promise<void> {
    this.movies = await this.movieService.getTrending().toPromise();
  }

  openModal(movieSelected: MovieModel) {
    this.movieSelected = movieSelected;
    return (this.showModal = !this.showModal);
  }
}
