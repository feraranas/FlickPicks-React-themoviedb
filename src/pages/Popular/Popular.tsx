import { MovieCard } from 'components/MovieCard';
import React, {useContext} from 'react'
import {
  BodyWrapper,
  Movies,
  Titulo,
  DivTitulo,
  Fila,
  Botones,
  SortByName,
  SliderMovies,
  SortByCalification,
} from "./styles";
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import SortIcon from '@mui/icons-material/Sort';
import { MovieContext } from 'contexts/MovieContext';

const Popular = () => {
  const { popularMovies } = useContext(MovieContext);
  
  // const [loading, setLoading] = useState(true);

  return (
    <BodyWrapper>
      <Fila>
        <DivTitulo>
          <Titulo>popular</Titulo>
        </DivTitulo>
        <Botones>
          <SortByName><SortByAlphaIcon fontSize='small' />Sort by Name</SortByName>
          <SortByCalification><SortIcon fontSize='small' />Sort by Calification</SortByCalification>
        </Botones>
      </Fila>
      <Movies>
        <SliderMovies>
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
        </SliderMovies>
      </Movies>
    </BodyWrapper>
  )
}

export default Popular;