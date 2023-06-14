import { MovieCard } from 'components/MovieCard';
import { MovieContext } from 'contexts/MovieContext';
import React, { useContext } from 'react'
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
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import SortIcon from '@mui/icons-material/Sort';

const NowPlaying = () => {
  const { nowPlayingMovies } = useContext(MovieContext);

  return (
    <App>
      <BodyWrapper>
        <Header>
          <ShowsTitle>NOW PLAYING</ShowsTitle>
          <Botones>
            <SortByName><SortByAlphaIcon fontSize='small' />Sort by Name</SortByName>
            <SortByCalification><SortIcon fontSize='small' />Sort by Calification</SortByCalification>
          </Botones>
        </Header>
        <Movies>
          <MovieSlider>
            {nowPlayingMovies?.length > 0 ? (
              nowPlayingMovies.map((movie) => (
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

export default NowPlaying;