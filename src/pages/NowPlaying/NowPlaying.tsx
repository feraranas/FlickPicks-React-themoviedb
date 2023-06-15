import { MovieCard } from 'components/MovieCard';
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
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import SortIcon from '@mui/icons-material/Sort';
import { CircularProgress } from '@mui/material';
import { getNowPlaying } from 'services';

const NowPlaying = () => {
  // ====================================> STATES
  const [nowPlayingMovies, setNowPlayingMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // ====================================> API CALLS
  const getNowPlayingMovies = async () => {
    await getNowPlaying()
      .then((res) => {
        if (res && res.data) {
          setNowPlayingMovies(res.data.results);
        }
      })
      .catch((err) => {
        console.log(err, 'err');
      });
    setLoading(false);
  }

  // ====================================> USE EFFECT
  useEffect(() => {
    setLoading(true);
    setTimeout(() => getNowPlayingMovies(), 1000);
  }, []);
  
  // ====================================> MAIN RENDER
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
            {!loading ? (
                nowPlayingMovies.slice(0,8).map((movie) => (
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
              ) : (<div
                      style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100vh",
                      }}
                  >
                      <CircularProgress />
                  </div>)}
          </MovieSlider>
        </Movies>
      </BodyWrapper>
    </App>
  )
}

export default NowPlaying;