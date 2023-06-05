import React, { useContext, useEffect, useState } from 'react'
import { ShowsSlider, 
ShowsTitle,
ShowsSliderContent,
LabelWithTumbs, } from './styles'
import { MovieContext } from 'contexts/MovieContext';
import { MovieCard } from 'components/MovieCard';
import { getMovieId } from 'services/movies/getMovies';

const MyFavorites = () => {
  const { favoriteMovies } = useContext(MovieContext);
  const [movieAPICalls, setMovieAPICalls] = useState<any[]>([]);

  useEffect(() => {
    console.log(favoriteMovies);
    const getMoviesFromIds = async () => {
      
      for (const id of favoriteMovies) {
        try {
          const res = await getMovieId(id);
          if (res && res.data) {
            setMovieAPICalls((prevMovie) => [...prevMovie, res.data]);
          }
        } catch (err) {
          console.log(err, 'err');
        }
      }
    };
  
    getMoviesFromIds();
  }, [favoriteMovies]);

  

  return (
    <ShowsSlider>
      <ShowsTitle>my favorites</ShowsTitle>
      <ShowsSliderContent>
        <LabelWithTumbs>
        {movieAPICalls?.length > 0 ? (
                movieAPICalls.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    isAdult={movie.adult}
                    path={movie.poster_path}
                    title={movie.title}
                    voteAverage={movie.vote_average}
                    genreId={Object.values(movie.genres)}
                    movieId={movie.id}
                    releaseDate={movie.release_date}
                    voteCount={movie.vote_count}
                    description={movie.overview}
                  />
                ))
                .filter((movie) => movie !== undefined)
        ) : (<div>Fetching</div>)}
        </LabelWithTumbs>
      </ShowsSliderContent>
    </ShowsSlider>
  )
}

export default MyFavorites