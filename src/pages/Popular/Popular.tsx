import { MovieCard } from 'components/MovieCard';
import { Searchbar } from 'components/Searchbar';
import React, { useEffect, useState} from 'react'
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
import { getPopular } from 'services';
import { CircularProgress } from '@mui/material';
import { MovieSearch } from 'components/MovieSearch';

const Popular = () => {
  // ====================================> STATES
  const [popularMovies, setPopularMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = React.useState("");

  // ====================================> API CALLS
  const getPopularMovies = async () => {
    await getPopular()
      .then((res) => {
        if (res && res.data) {
          setPopularMovies(res.data.results);
          console.log(res.data.results);
        }
      })
      .catch((err) => {
        console.log(err, 'err');
      });
    setLoading(false);
  } 

  // ====================================> USE EFFECT
  useEffect(() => {
    setLoading(true)
    setTimeout(() => getPopularMovies(), 1000);
  }, [])

  // ====================================> MAIN RENDER
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
        <Searchbar setInputValue={setInputValue} value={inputValue}/>
        <Movies>
          <MovieSlider>
          {!loading ? (
            <>
              {!(inputValue === "") ? (
                  <MovieSearch searchValues={inputValue} movieValues={popularMovies}/>
              ) : (
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
              )}
            </>
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

export default Popular;