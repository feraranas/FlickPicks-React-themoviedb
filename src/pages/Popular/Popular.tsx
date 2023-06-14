import { MovieCard } from 'components/MovieCard';
import React, {useContext} from 'react'
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

const Popular = () => {
  const { popularMovies } = useContext(MovieContext);

  return (
    <App>
      <BodyWrapper>
        <Header>
          <ShowsTitle>POPULAR</ShowsTitle>
          <Botones>
            <SortByName><SortByAlphaIcon fontSize='small' />Sort by Name</SortByName>
            <SortByCalification><SortIcon fontSize='small' />Sort by Calification</SortByCalification>
          </Botones>
        </Header>
        <Movies>
          <MovieSlider>
            {popularMovies?.length > 0 ? (
              popularMovies.map((movie) => (
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

export default Popular;