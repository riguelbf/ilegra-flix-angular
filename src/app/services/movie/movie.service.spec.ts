import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  let movies = [];

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });

  it('should get movie list from the mobie api', () => {
    const service: MovieService = TestBed.get(MovieService);
    const movies = service.getTrending();
    expect(movies).toBeGreaterThanOrEqual(0);
  });
});
