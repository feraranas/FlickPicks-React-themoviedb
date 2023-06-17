import React, { useEffect, useState } from 'react'
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
import { MovieCard } from 'components/MovieCard';
import { getMovieId } from 'services/movies/getMovies';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import SortIcon from '@mui/icons-material/Sort';
import { CircularProgress } from '@mui/material';

const MyFavorites = () => {
  // ====================================> STATES
  const [loading, setLoading] = useState(false);
  const [myFavorites, setMyFavorites] = useState<any[]>([]);

  // ====================================> API CALLS
  const getMovieById = async (id: string) => {
    try {
      const res = await getMovieId(id);
      if (res && res.data) {
        return res.data;
      } else {
        throw new Error('Not found');
      }
    } catch (error) {
      console.log(error);
      throw new Error('Error');
    }
  };

  // ====================================> USE EFFECT
  useEffect(() => {
    setLoading(true);
    const getMyFavoriteMovies = async() => {
      const favoriteIds = JSON.parse(localStorage.getItem('favorites') || '[]');
      const data = await Promise.all(
        favoriteIds.map((_id: string) => getMovieById(_id))
      );
      setMyFavorites(data);
      setLoading(false);
    }
    getMyFavoriteMovies();
  }, [])
  

  // ====================================> MAIN RENDER
  return (
    <App>
      <BodyWrapper>
        <Header>
          <ShowsTitle>MY FAVORITES</ShowsTitle>
          <Botones>
            <SortByName ><SortByAlphaIcon fontSize='small' />Sort by Name</SortByName>
            <SortByCalification ><SortIcon fontSize='small' />Sort by Calification</SortByCalification>
          </Botones>
        </Header>
        <Movies>
          <MovieSlider>
          {!loading ? (
              myFavorites.slice(0,8).map((movie) => (
                <MovieCard
                  key={movie.id}
                  path={movie.poster_path}
                  isAdult={movie.adult}
                  title={movie.title}
                  voteAverage={movie.vote_average}
                  genreId={movie.genre_ids ? Object.values(movie.genre_ids) : []}
                  movieId={movie.id}
                  releaseDate={movie.release_date}
                  voteCount={movie.vote_count}
                  description={movie.overview}
                />
              ))
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <CircularProgress />
              </div>
            )}
      </MovieSlider>
      </Movies>
      </BodyWrapper>
    </App>
  )
}

export default MyFavorites