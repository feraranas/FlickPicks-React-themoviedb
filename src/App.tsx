import React, { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "routes/router";
import { MovieContext } from "contexts/MovieContext";
import {
  getPopular,
  getNowPlaying,
  getTopRated,
} from './services';

const App = () => {
  const [popularMovies, setPopularMovies] = useState<any[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<any[]>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<any[]>([]);
  
  const [favoriteMovies, setFavoriteMovies] = useState<any[]>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const addFavoriteMovie = (id: string | undefined) => {
    if (id !== undefined && !favoriteMovies.includes(id)) {
      setFavoriteMovies((prevFavorites) => [...prevFavorites, id]);
    }
  };
  
  const removeFavoriteMovie = (id: string | undefined) => {
    setFavoriteMovies((prevFavorites) => prevFavorites.filter((favorite) => favorite !== id));
  };

  useEffect(() => {

    const getPopularMovies = async() => {
      await getPopular()
        .then((res) => {
          if (res && res.data) {
            setPopularMovies(res.data.results);
          }
      })
        .catch((err) => {
          console.log(err, 'err');
        })
    }
  
    const getTopRatedMovies = async() => {
      await getTopRated()
        .then((res) => {
          if (res && res.data) {
            setTopRatedMovies(res.data.results);
          }
        })
        .catch((err) => {
          console.log(err, 'err');
        })
    }

    const getNowPlayingMovies = async() => {
      await getNowPlaying()
        .then((res) => {
          if (res && res.data) {
            setNowPlayingMovies(res.data.results);
          }
        })
        .catch((err) => {
          console.log(err, 'err');
        })
    }

    getPopularMovies();
    getNowPlayingMovies();
    getTopRatedMovies();
  })

  return (
  <MovieContext.Provider value={{ 
    popularMovies, 
    setPopularMovies, 
    topRatedMovies, 
    setTopRatedMovies, 
    nowPlayingMovies, 
    setNowPlayingMovies,
    favoriteMovies,
    addFavoriteMovie,
    removeFavoriteMovie,
  }}>
    <RouterProvider router={router} />
  </MovieContext.Provider>
);
};

export default App;
