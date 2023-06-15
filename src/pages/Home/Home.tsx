import React, { useEffect, useState } from 'react'
import { MovieCard } from "components/MovieCard";
import {
  App,
  HomeWrapper,
  ShowsSlider,
  ShowsTitle,
  ShowsSliderContent,
  LabelWithTumbs,
  ViewAll, ViewAlla,
} from "./styles"
import { getNowPlaying, getPopular, getTopRated } from 'services';
import { CircularProgress } from '@mui/material';

const Home = () => {
  // ==================================== STATES
  const [popularMovies, setPopularMovies] = useState<any[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<any[]>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<any[]>([]);
  const [loadingPopularMovies, setLoadingPopularMovies] = useState(false);
  const [loadingTopRatedMovies, setLoadingTopRatedMovies] = useState(false);
  const [loadingNowPlayingMovies, setLoadingNowPlayingMovies] = useState(false);

  // ==================================== API CALLS
  const getPopularMovies = async() => {
    setLoadingPopularMovies(true);
    await getPopular()
      .then((res) => {
        if (res && res.data) {
          setPopularMovies(res.data.results);
        }
    })
      .catch((err) => {
        console.log(err, 'err');
      })
      setLoadingPopularMovies(false);
  }

  const getTopRatedMovies = async () => {
    setLoadingTopRatedMovies(true);
    await getTopRated()
      .then((res) => {
        if (res && res.data) {
          // console.log(res.data, 'res');
          setTopRatedMovies(res.data.results);
        }
      })
      .catch((err) => {
        console.log(err, 'err');
      });
      setLoadingTopRatedMovies(false);
  }

  const getNowPlayingMovies = async () => {
    setLoadingNowPlayingMovies(true);
    await getNowPlaying()
      .then((res) => {
        if (res && res.data) { 
          setNowPlayingMovies(res.data.results);
        }
      })
      .catch((err) => {
        console.log(err, 'err');
      });
    setLoadingNowPlayingMovies(false);
  }

  // ==================================== USE EFFECT
  useEffect(() => {
    setTimeout(() => {
      getPopularMovies()
      getTopRatedMovies()
      getNowPlayingMovies()
    }, 1000);
  }, []);

  // ==================================== MAIN RENDER
  return (
    <App>
      <HomeWrapper>
        <ShowsSlider>
          <ShowsTitle>POPULAR</ShowsTitle>
          <ShowsSliderContent>
            <LabelWithTumbs>
              {!loadingPopularMovies ? (
                popularMovies.slice(0,8).map((movie) => (
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
            </LabelWithTumbs>
            <ViewAll>
              <a href="/popular/">View All</a>
            </ViewAll>
          </ShowsSliderContent>
        </ShowsSlider>
        <ShowsSlider>
          <ShowsTitle>TOP RATED</ShowsTitle>
            <ShowsSliderContent>
              <LabelWithTumbs>
              {!loadingTopRatedMovies ? (
                topRatedMovies.slice(0.8).map((movie) => (
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
              </LabelWithTumbs>
              <ViewAll>
                <a href="/top-rated/">View All</a>
              </ViewAll>
            </ShowsSliderContent>
        </ShowsSlider>
        <ShowsSlider>
          <ShowsTitle>NOW PLAYING</ShowsTitle>
            <ShowsSliderContent>
              <LabelWithTumbs>
              {!loadingNowPlayingMovies ? (
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
              </LabelWithTumbs>
              <ViewAll>
                <ViewAlla as="a" href="/now-playing/">View All</ViewAlla>
              </ViewAll>
            </ShowsSliderContent>
        </ShowsSlider>
      </HomeWrapper>
    </App>
  )
}

export default Home