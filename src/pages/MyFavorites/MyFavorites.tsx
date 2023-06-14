import { MovieCard } from 'components/MovieCard';
import React, {useContext, useEffect, useState} from 'react'
import {
  App,
  BodyWrapper,
  Header,
  ShowsTitle,
  Movies,
  Titulo,
  DivTitulo,
  Botones,
  SortByName,
  MovieSlider,
  SortByCalification,
} from "./styles";
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import SortIcon from '@mui/icons-material/Sort';
import { MovieContext } from 'contexts/MovieContext';
import { getMovieId } from 'services/movies/getMovies';


const MyFavorites = () => {
  // --------------------------------------------- CONTEXT
  const { favoriteMovies } = useContext(MovieContext);

  // --------------------------------------------- STATES
  const [movieAPICalls, setMovieAPICalls] = useState<any[]>([]);
  const [favoriteMoviesIds, setFavoriteMoviesIds] = useState<any[]>([]);

  // --------------------------------------------- USE EFFECT
  useEffect(() => {
    const getMoviesFromIds = async () => {
      for (const _id of favoriteMovies) {
        if (!favoriteMoviesIds.includes(_id)) {
          try {
            const res = await getMovieId(_id);
            if (res && res.data) {
              setFavoriteMoviesIds((prevMovie) => [...prevMovie, _id]);
              setMovieAPICalls((prevMovie) => [...prevMovie, res.data]);
            }
          } catch (err) {
            console.log(err, 'err');
          }
        }
      }
    };
  
    getMoviesFromIds();
  }, [favoriteMovies]);

  // --------------------------------------------- MAIN RENDER
  return (
    <App>
      <BodyWrapper>
        <Header>
          <ShowsTitle>MY FAVORITES</ShowsTitle>
          <Botones>
            <SortByName><SortByAlphaIcon fontSize='small' />Sort by Name</SortByName>
            <SortByCalification><SortIcon fontSize='small' />Sort by Calification</SortByCalification>
          </Botones>
        </Header>
        <Movies>
          <MovieSlider>
            {movieAPICalls?.length > 0 ? (
              movieAPICalls.map((movie) => (
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
            ) : (
              <div>Cargando</div>
            )}
          </MovieSlider>
        </Movies>
      </BodyWrapper>
    </App>
  )
}

export default MyFavorites

