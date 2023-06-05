import { MovieCard } from 'components/MovieCard';
import { MovieContext } from 'contexts/MovieContext';
import React, { useContext } from 'react'

const TopRated = () => {
  const { topRatedMovies } = useContext(MovieContext);

  return (
    <div>
      {topRatedMovies?.length > 0 ? (
        topRatedMovies.map((movie) => (
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
        ))
      ) : (<div>Cargando</div>)}
    </div>
  )
}

export default TopRated