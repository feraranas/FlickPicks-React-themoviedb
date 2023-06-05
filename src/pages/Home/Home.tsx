import React, { useContext } from 'react'
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
import { MovieContext } from 'contexts/MovieContext';

const Home = () => {
  const { popularMovies, topRatedMovies, nowPlayingMovies } = useContext(MovieContext); 

  return (
    <App>
      <HomeWrapper>
        <ShowsSlider>
          <ShowsTitle>POPULAR</ShowsTitle>
          <ShowsSliderContent>
            <LabelWithTumbs>
              {popularMovies?.length > 0 ? (
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
              ) : (<div>Fetching</div>)}
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
              {topRatedMovies?.length > 0 ? (
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
              ) : (<div>Fetching</div>)}
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
              {nowPlayingMovies?.length > 0 ? (
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
              ) : (<div>Fetching</div>)}
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