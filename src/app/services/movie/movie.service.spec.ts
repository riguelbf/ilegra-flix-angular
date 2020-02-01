import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('MovieService', () => {
  let movies = [];

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
  });

  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });

  xit('should get movie list from the mobie api', () => {
    const service: MovieService = TestBed.get(MovieService);
    const movies = service.getTrending();
    expect(movies).toBeGreaterThanOrEqual(0);
  });
});
