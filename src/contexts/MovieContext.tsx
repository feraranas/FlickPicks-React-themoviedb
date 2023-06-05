import React from "react";

export type MovieContextType = {
     popularMovies: any[];
     setPopularMovies: React.Dispatch<React.SetStateAction<any[]>>;
     topRatedMovies: any[];
     setTopRatedMovies: React.Dispatch<React.SetStateAction<any[]>>;
     nowPlayingMovies: any[];
     setNowPlayingMovies: React.Dispatch<React.SetStateAction<any[]>>;
     favoriteMovies: any[];
     addFavoriteMovie: (id: string | undefined) => void;
     removeFavoriteMovie: (id: string | undefined) => void;
   };
   
  export const MovieContext = React.createContext<MovieContextType>({
     popularMovies: [],
     setPopularMovies: () => {},
     topRatedMovies: [],
     setTopRatedMovies: () => {},
     nowPlayingMovies: [],
     setNowPlayingMovies: () => {},
     favoriteMovies: [],
     addFavoriteMovie: (id: string | undefined) => {},
     removeFavoriteMovie: (id: string | undefined) => {},
   });


   