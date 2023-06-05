export interface MovieCardProp {
  path: string;
  isAdult: boolean;
  title: string;
  voteAverage: number;
  genreId: Array<number>;
  movieId: number;
  releaseDate: Date;
  voteCount: number;
  description: string;
}
