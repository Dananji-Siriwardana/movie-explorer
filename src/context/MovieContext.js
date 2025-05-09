// src/context/MovieContext.js

import React, { createContext, useState, useContext } from 'react';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  return (
    <MovieContext.Provider value={{ movies, setMovies, favorites, setFavorites }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
