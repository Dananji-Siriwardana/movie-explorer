import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import Navbar from './components/Header';
import HomePage from './pages/Home';
import MovieDetails from './components/MovieDetails';
import FavoritesPage from './pages/FavoriteList';

const App = () => {
  return (
    <MovieProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>        
      </Router>
    </MovieProvider>
  );
};

export default App;
