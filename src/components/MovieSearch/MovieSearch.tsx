import { MovieCard } from 'components/MovieCard';
import React from 'react'
import { MovieSearchProps } from "./types";

const Searchbar: React.FC<MovieSearchProps> = ({
     searchValues,
     movieValues
}) => {
  return (
     <>
          {movieValues
          .filter((data: any) => {
               const titleLower = data.title.toLowerCase();
               const searchLower = searchValues.toLowerCase();
               return titleLower.includes(searchLower);
          })
          .map((movie: any) => (
               <MovieCard
                    key={movie.id}
                    path={movie.poster_path}
                    isAdult={movie.adult}
                    title={movie.title}
                    voteAverage={movie.vote_average}
                    genreId={Object.values(movie.genre_ids)}
                    movieId={movie.id}
                    releaseDate={movie.release_date}
                    voteCount={movie.vote_count}
                    description={movie.overview}
               />
          ))}
     </>
  )
};

export default Searchbar;
