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
    const getMoviesFromIds = async () => {
      let uniqueMovies: string[] = movieAPICalls.map(movie => JSON.stringify(movie));
  
      for (const id of favoriteMovies) {
          try {
            const res = await getMovieId(id);
            if (res && res.data) {
              const dataString = JSON.stringify(res.data);
              if (!uniqueMovies.includes(dataString)) {
                //uniqueMovies.push(dataString);
                setMovieAPICalls((prevMovie) => [...prevMovie, JSON.parse(dataString)]);
                console.log(movieAPICalls);
              }
            }
          } catch (err) {
            console.log(err, 'err');
          }
      }
    };
  
    getMoviesFromIds();
  }, [favoriteMovies, movieAPICalls]);
  

  

  return (
    <ShowsSlider>
      <ShowsTitle>my favorites</ShowsTitle>
      <ShowsSliderContent>
        <LabelWithTumbs>
        {movieAPICalls?.length > 0 ? (
                movieAPICalls.reduce((unique, movie) => {
                  return unique.findIndex((m:any) => m.id === movie.id) < 0 ? [...unique, movie] : unique;
                }, [])
                .map((movie:any) => (
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
                
        ) : (<div>Fetching</div>)}
        </LabelWithTumbs>
      </ShowsSliderContent>
    </ShowsSlider>
  )
}

export default MyFavorites