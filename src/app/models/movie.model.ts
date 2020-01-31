import { Deserializable } from './deserializable.interface';
import { BaseModel } from './base.model';

export class MovieModel extends BaseModel
  implements Deserializable<MovieModel> {
  constructor(
    id: number,
    video: boolean,
    voteCount: number,
    voteAverage: number,
    title: string,
    releaseDate: Date,
    originalLanguage: string,
    originalTitle: string,
    genreIds: number[],
    backdropPath: string,
    adult: boolean,
    overview: string,
    posterPath: string,
    popularity: number,
    mediaType: string
  ) {
    super();
    super.id = id;
    this.video = video;
    this.voteCount = voteCount;
    this.voteAverage = voteAverage;
    this.title = title;
    this.releaseDate = releaseDate;
    this.originalLanguage = originalLanguage;
    this.originalTitle = originalTitle;
    this.genreIds = genreIds;
    this.backdropPath = backdropPath;
    this.adult = adult;
    this.overview = overview;
    this.posterPath = posterPath;
    this.popularity = popularity;
    this.mediaType = mediaType;
  }

  video: boolean;
  voteCount: number;
  voteAverage: number;
  title: string;
  releaseDate: Date;
  originalLanguage: string;
  originalTitle: string;
  genreIds: number[];
  backdropPath: string;
  adult: boolean;
  overview: string;
  posterPath: string;
  popularity: number;
  mediaType: string;

  deserialize(input: MovieModel): this {
    return Object.assign(this, input);
  }
}
