import React, { useContext, useEffect, useState } from 'react'
import {
  App,
  BodyWrapper,
  Header,
  ShowsTitle,
  Movies,
  Botones,
  SortByName,
  MovieSlider,
  SortByCalification,
} from "./styles";
import { MovieContext } from 'contexts/MovieContext';
import { MovieCard } from 'components/MovieCard';
import { getMovieId } from 'services/movies/getMovies';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import SortIcon from '@mui/icons-material/Sort';

const MyFavorites = () => {
  // --------------------------------------------- USE CONTEXT
  const { favoriteMovies } = useContext(MovieContext);

  // --------------------------------------------- STATE
  const [movieAPICalls, setMovieAPICalls] = useState<any[]>([]);
  const [uniqueFavMovies, setUniqueFavMovies] = useState<any[]>([]);

  // --------------------------------------------- FUNCTIONS
  const sortbyName = () => {
    movieAPICalls.reduce((unique, movie) => {
      return unique.findIndex((m: any) => m.id === movie.id) < 0 ? [...unique, movie] : unique;
    }, []).map()
  }

  const sortBycalification = () => {

  }

  // --------------------------------------------- USE EFFECT
  useEffect(() => {

  }, [movieAPICalls])

  useEffect(() => {
    const getMoviesFromIds = async () => {
      // Way of avoiding duplicates (1)
      let uniqueMovies: string[] = movieAPICalls.map(movie => JSON.stringify(movie));
  
      for (const id of favoriteMovies) {
          try {
            const res = await getMovieId(id);
            if (res && res.data) {
              const dataString = JSON.stringify(res.data);
              if (!uniqueMovies.includes(dataString)) {
                //uniqueMovies.push(dataString);
                setMovieAPICalls((prevMovie) => [...prevMovie, JSON.parse(dataString)]);
              }
            }
          } catch (err) {
            console.log(err, 'err');
          }
      }

      setMovieAPICalls((prevMovies) =>
      prevMovies.reduce((unique, movie) => {
        return unique.findIndex((m: any) => m.id === movie.id) < 0 ? [...unique, movie] : unique;
      }, [])
    );
      console.log(movieAPICalls);

      };
  
    getMoviesFromIds();
  }, [favoriteMovies]);
  

  // --------------------------------------------- MAIN RENDER
  return (
    <App>
      <BodyWrapper>
        <Header>
          <ShowsTitle>POPULAR</ShowsTitle>
          <Botones>
            <SortByName onClick={sortbyName}><SortByAlphaIcon fontSize='small' />Sort by Name</SortByName>
            <SortByCalification onClick={sortBycalification}><SortIcon fontSize='small' />Sort by Calification</SortByCalification>
          </Botones>
        </Header>
        <Movies>
          <MovieSlider>
        {movieAPICalls?.length > 0 ? (
                movieAPICalls.map((movie:any) => (
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
      </MovieSlider>
      </Movies>
      </BodyWrapper>
    </App>
  )
}

export default MyFavorites