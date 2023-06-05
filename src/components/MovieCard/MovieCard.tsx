import React from "react";
import { IMAGE_SOURCE } from "constants/moviesMock";
import genres from "constants/genres.json";
import { MovieCardProp } from "./types";
import {
  ImageContainer,
  InfoShow,
  ShowBox,
  ShowCalification,
  ShowLabelTitle,
  ShowThumb,
  ShowTitle,
} from "./styles";
import { Pill } from "components/Pill";
import { useNavigate } from "react-router-dom";

const MovieCard: React.FC<MovieCardProp> = ({
  path,
  isAdult,
  title,
  voteAverage,
  genreId,
  movieId,
  releaseDate,
  voteCount,
  description,
}) => {
  const poster = "https://image.tmdb.org/t/p/w500" + path;
  const navigate = useNavigate();
  
  const getGenre = (genreIds: Array<any>) => {
    const allGenres = Object.values(genreIds);
    const keys: any[] = Object.keys(genres.genres).filter((genre: any): boolean =>
      allGenres.includes(genres.genres[genre].id)
    );

    const genreNames = keys.map(key => genres.genres[key].name);
    
    if (genreNames.length > 0) {
      return genreNames;
    }
    return "Not Classified";
  };

  const getColor = (rating: number) => {
    if(rating >= 8){
      return '#74B566';
    }else if (rating >= 7){
      return '#efca54';
    }
  }

  const navigateMovies = (
    id: number,
    movieName: string,
    posterPath: string,
    isAdult: boolean,
    voteAverage: number,
    genreId: Array<string> | string | undefined,
    releaseDate: Date,
    voteCount: number,
    description: string,
  ) => {
    const dict = {
      movieId: id,
      name: movieName,
      poster: posterPath,
      adult: isAdult,
      vote_average: voteAverage,
      genre_ids: genreId,
      release_date: releaseDate,
      vote_count: voteCount,
      overview: description
    };
    
    navigate(`/show/${id}`, { state: dict });
  }

  return (
    <ShowBox
      onClick={() => {
        navigateMovies(
          movieId,
          title,
          path,
          isAdult,
          voteAverage,
          getGenre(genreId),
          releaseDate,
          voteCount,
          description,
        );
      }}>
      <ImageContainer>
        <ShowThumb src={poster} />
      </ImageContainer>
      <InfoShow>
        <ShowTitle>
          <Pill genre={getGenre(genreId)[0]} pillColor={getColor(voteAverage)} />
          <ShowLabelTitle>{title}</ShowLabelTitle>
          <ShowCalification>* {voteAverage} / 10</ShowCalification>
        </ShowTitle>
      </InfoShow>
    </ShowBox>
  );
};

export default MovieCard;
